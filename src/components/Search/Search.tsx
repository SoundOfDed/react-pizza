import classes from "./Search.module.scss"
import clearSvg from '../../assets/img/clear-svgrepo-com.svg'
import { setSearchInput } from '../../redux/filter/slice'
import { useCallback, useRef, useState, FC, ChangeEvent } from "react"
import debounce from "lodash.debounce"
import { useDispatch } from "react-redux"


const Search: FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const updateSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(setSearchInput(str));
        }, 250),
        []
    )

    const onClickClear = () => {
        dispatch(setSearchInput(''))
        setValue('')
        inputRef.current?.focus();
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className={classes.root}>
            <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 46.553307 46.200966" version="1.1">
                <g transform="translate(-29.461,-26.738)">
                    <path d="m69.902 72.704-10.935-10.935c-2.997 1.961-6.579 3.111-10.444 3.111-10.539 0-19.062-8.542-19.062-19.081 0-10.519 8.522-19.061 19.062-19.061 10.521 0 19.06 8.542 19.06 19.061 0 3.679-1.036 7.107-2.828 10.011l11.013 11.011c0.583 0.567 0.094 1.981-1.076 3.148l-1.64 1.644c-1.17 1.167-2.584 1.656-3.15 1.091zm-8.653-26.905c0-7.033-5.695-12.727-12.727-12.727-7.033 0-12.745 5.694-12.745 12.727s5.712 12.745 12.745 12.745c7.032 0 12.727-5.711 12.727-12.745z" />
                </g>
            </svg>
            <input
                ref={inputRef}
                className={classes.input}
                placeholder="Поиск пиццы ..."
                value={value}
                onChange={onChangeInput}
            />
            {value && (<img onClick={onClickClear} className={classes.clear} src={clearSvg} alt="clearIcon" />)}
        </div>
    );
}

export default Search;
