import { CardItem } from "./CardItem";

export function Cart({ cartItems }) {
    return (<div>
        <h2 className="mb-8">CART</h2>

        <ul>
            {cartItems.map(cartItem => <li key={cartItem.product.id} >
                <CardItem item={cartItem} />
            </li>)}
        </ul>

    </div>
    );
}

