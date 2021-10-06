import s from './LocalSuperButton.module.css'


export const LocalSuperButton = ({
    buttonTitle,
} : {
    buttonTitle: string,
}) => {

    return <>
        <button className={s.commonButtonStyle}>
            {buttonTitle}
        </button>
    </>
}








