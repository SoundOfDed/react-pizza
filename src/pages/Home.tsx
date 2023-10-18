import { useEffect, FC, useCallback } from 'react';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination/Pagination';
import { useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
import { fetchPizzas } from '../redux/pizza/asyncActions';
import { selectPizzaData } from '../redux/pizza/selectors';
import { useAppDispatch } from '../redux/store';

const Home: FC = () => {
    const dispatch = useAppDispatch()

    const { categoryId, sort, currentPage, searchInput } = useSelector(selectFilter)
    const { items, status } = useSelector(selectPizzaData)
    const sortType = sort.sortProperty


    const getPizzas = async () => {

        dispatch(
            fetchPizzas(
            {
                categoryId: String(categoryId),
                sortType,
                searchInput,
                currentPage: String(currentPage),
            }
        ));
    }

    const onClickCategory = useCallback((id: number) => {
        dispatch(setCategoryId(id))
    }, [])

    const onPageChange = (number: number) => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getPizzas();

    }, [categoryId, sortType, searchInput, currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort value={sort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === 'error' ?
                    <div className='content__error-info'>
                        <h2>Произошла ошибка 😕</h2>
                        <p>
                            Не удалось получить питсы(. Попробуйте повторить позже
                        </p>
                    </div> : <div className="content__items">
                        {status === 'loading'
                            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                            : items.map((obj: any) => <PizzaBlock key={obj.id}  {...obj} />)}
                    </div>
            }

            <Pagination currentPage={currentPage} onPageChange={onPageChange} />
        </div>

    );
}

export default Home;
