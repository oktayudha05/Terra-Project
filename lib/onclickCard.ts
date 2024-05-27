import Router from "next/router"

const click = (card:any) => {
    Router.push({
        pathname: '/card',
        query: { card: card }
    })
}

export default click;