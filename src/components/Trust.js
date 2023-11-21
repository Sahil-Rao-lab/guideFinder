import Image from "next/image";
import trust1 from '../../public/trust1.svg';
import trust2 from '../../public/trust2.svg';
import trust3 from '../../public/trust3.svg';


export default function Trust() {

    return (
        <>

            <div className="trust">
                <h2 className='title'>Book Hassel Free</h2>
                <div className="trust-container">
                    <div className="truct-box">
                        <Image src={trust1} width="auto" height={"auto"} />
                        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis.</p>
                    </div>
                    <div className="truct-box">
                        <Image src={trust2} width="auto" height={"auto"} />
                        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis.</p>
                    </div>
                    <div className="truct-box">
                        <Image src={trust3} width="auto" height={"auto"} />
                        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis.</p>
                    </div>
                </div>
            </div>
        </>
    )

}