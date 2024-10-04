import "./teamCard.css";


interface TeamCardProps {
    name: string;
    role: string;
    image: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {

export default function TeamCard() {

    return (
        <div className="col-md-4 single-item col-lg-3">
            <div className="item">
                <div className="thumb">

                    <img className="img-fluid" src={image} alt={name} />
                </div>
                <div className="info">
                    <h4 className="name">{name}</h4> 
                    <span className="position">{role}</span> 


                </div>
            </div>
        </div>
    );
}
