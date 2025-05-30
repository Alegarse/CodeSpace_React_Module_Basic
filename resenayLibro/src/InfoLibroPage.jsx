import React from 'react'

const InfoLibroPage = () => {

    const infoLibro = {
        ISBN: 'cfdea9bc-616a-4e4b-8e61-ea74d4c9a4d4',
        author: 'Cristian Romero',
        title: 'Leyendas de Codespace',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
    }

    const listaTiendas = [
        {
            id: 0,
            name: "Deckow - Runolfsson",
            address: "111 Asa Radial"
        },
        {
            id: 1,
            name: "Bernier - Swift",
            address: "0421 Feeney Station"
        }
    ]
    const reviewList = [
        {
            name: "Eda",
            review: "Aliquam assumenda dignissimos eum quo ut similique sapiente. Et et tempore debitis praesentium pariatur ad eum. Autem a sed sit eos quasi assumenda. Consequatur sint suscipit eos eaque assumenda.",
            created_at: "2024-04-22T16:46:57.725Z"
        },
        {
            name: "Morris",
            review: "Perspiciatis qui reiciendis quidem adipisci saepe nihil soluta. Repudiandae maxime ut id. Consequatur aut dolor totam voluptatem sunt ut veritatis. Voluptates minus enim quos.",
            created_at: "2024-03-13T18:32:11.309Z"
        },
        {
            name: "Timmy",
            review: "Porro libero eaque quasi voluptates suscipit maxime officiis nesciunt. Possimus ea est qui fuga ea enim consequatur voluptatibus. Quas qui quisquam iusto. Sunt similique optio. Molestiae et aut iusto itaque dignissimos id doloremque sit error. Illum voluptatibus natus incidunt minus ratione quod et debitis debitis.",
            created_at: "2023-11-07T17:20:35.883Z"
        },
        {
            name: "Maud",
            review: "Rerum autem omnis. Perspiciatis qui recusandae est ratione accusamus. Deleniti animi omnis dolorem maiores delectus eveniet et fugiat. Fugiat et sed sapiente voluptatum voluptatem quis et laborum.",
            created_at: "2024-06-27T15:13:02.845Z"
        }
    ]
    return (
        <div>
            <div>
                <h1>Información del Libro</h1>
            </div>
            <hr />
            <div>
                <div>
                    <h2>Informaciónd el libro</h2>
                    <div>
                        <p>
                            Title: {infoLibro.title}
                        </p>
                        <p>
                            ISBN: {infoLibro.ISBN}
                        </p>
                        <p>
                            Autor: {infoLibro.author}
                        </p>
                        <p>
                            Descripción: {infoLibro.description}
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h2>Donde puedo comprar este libro?</h2>
                {
                    listaTiendas.map(tienda => (
                        <div>
                            <p>Nombre tienda: {tienda.name}</p>
                            <p>Dirección tienda: {tienda.address}</p>
                            <hr />
                        </div>
                    ))
                }
            </div>
            <hr />
            <div>
                <h2>Reseñas</h2>
                {
                    reviewList.map(review => (
                        <div>
                            <p>Name: {review.name}</p>
                            <p>Date: {review.created_at}</p>
                            <p>Review: {review.review}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InfoLibroPage