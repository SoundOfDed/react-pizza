import axios from 'axios';
import { useEffect, useState, FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: FC = () => {
    const [pizza, setPizza] = useState<{
        imageUrl: string,
        title: string,
        price: number,
    }>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get('https://651ef7de44a3a8aa476944af.mockapi.io/items/' + id);
                setPizza(data)
            } catch (error) {
                alert('Ошибка при получении пиццы');
                navigate('/');
            }
        }
        fetchPizza();
    }, []);

    if (!pizza) return 'Загрузка...'

    return (
        <div className='container'>
            <img src={pizza.imageUrl} alt="" />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price}</h4>
        </div>
    );
}

export default FullPizza;

