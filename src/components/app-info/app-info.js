import './app-info.css';

const AppInfo = ({increase, emploers}) => {
    return (
        <div className="app-info">
            <h1> Учет сотрудников в Компании </h1>
            <h2>Общее число сотруднико: {emploers}</h2>
            <h2>Премию получат: {increase}</h2>
        </div>
    )
}

export default AppInfo;