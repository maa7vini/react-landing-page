import './Nav.css'

export default function Nav(){
    return(
        <nav>
            <div className='title'>
                <h1> Landy </h1>
            </div>

            <div className='navMenu'>
                <p> About </p>

                <p> Missions </p>

                <p> Product </p>

                <button> Contact </button>
            </div>
        </nav>
    )
}

