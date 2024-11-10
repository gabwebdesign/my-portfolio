import './custom-modal.css';

export type CustomModalProps = {
    title: string;
    duration: string;
    industries: string;
    technologies: string;
    description: string;
    alt:string;
    large:string;
}

export default function CustomModal({title,industries,technologies,description,alt,large}: CustomModalProps) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}