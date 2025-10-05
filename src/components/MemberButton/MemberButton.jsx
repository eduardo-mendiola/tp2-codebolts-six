import '@/components/MemberButton/MemberButton.css';

export default function MemberButton({imgsrc, name, onClick}){
    return(
        <button className='member-button' onClick={onClick}>
            <div className='member-img-container'>
                <img src={imgsrc} alt={name} className='member-img'/>
            </div>
            <a className='member-name'>{name}</a>
        </button>
    );
}