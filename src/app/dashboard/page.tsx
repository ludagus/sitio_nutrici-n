import cardList from "../data/data"
import { lusitana } from "../ui/fonts";

export default function dashboard() {
    return (
      <main className="container mx-auto py-36 px-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"> 
        {cardList.map(card=>(
            <div className="shadow-lg rounded-lg ">
                <img className="rounded-t-lg" src={card.img} alt="" />
                <div className="p-5"> 
                    <h3 className="text-3x1 font-bold text-slate-700">{card.title}</h3>
                    <p>{card.text}</p>
                </div>
            </div>
            ))}
        </div>
        
    </main>
    );
  }