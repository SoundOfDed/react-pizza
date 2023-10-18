import { FC } from 'react';
import classes from './NotFoundBlock.module.scss'

const NotFoundBlock: FC = () => {
    return (
        <div className={classes.main}>
            <h1>Ничего не найдено(</h1>
        </div>
    );
}

export default NotFoundBlock;
