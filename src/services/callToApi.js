const callToApi = (data) => {
    console.log(data);
    return (
        fetch('https://awesome-profile-cards.herokuapp.com/card', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const dataFromApi = {
                    success: data.success,
                    cardURL: data.cardURL
                }
                return dataFromApi;

                // createdCard.classList.remove('hidden');
                // if (data.success === true) {
                //     shareMessage.innerHTML = 'La tarjeta ha sido creada';
                //     generatedLink.innerHTML = data.cardURL;
                //     generatedLink.setAttribute('href', data.cardURL);
                // } else {
                //     shareMessage.innerHTML = 'Error al crear la tarjeta';
                //     generatedLink.innerHTML =
                //         'Revisa los datos, pula el botón RESET y vulve a intentarlo';
                //     generatedLink.removeAttribute('href');
                // }
            })
    )
}
export default callToApi;