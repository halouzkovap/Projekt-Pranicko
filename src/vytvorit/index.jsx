import React,{useState,useEffect} from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../header';
import Ready from '../ready';

const Vytvorit=()=>{

    const [wish,setWish]= useState ({
        background: "",
        color: "",
        cover: "",
        music: "",
        snow: 1,
        text: "",
        sender: ""
      })

      const [response,setResponse]=useState({undefined});

      const handleChange = e => {
        const { name, value } = e.target;
        setWish( {
              ...wish,
            [name]: value
        });
      };

const  [result,setResult]=useState()

      const handleSumbit =(event)=>{
          console.log("try send data")
          event.preventDefault();

         fetch('https://xmas-api.itgirls.cz/cards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( wish )
          })
          .then(response => response.json())
          .then(data => {
            setResult(data.success);
            setResponse(data.data);
            console.log(response);
          })
      
       
      }

     if(result===true){
         return(
             <Ready data={response}/>
         )
     } 
     
     if(result === undefined)
  {  return(
        <>
         <Header title="Vytvořit přáníčko"/>
         <main className="content">

			<div className="box">
				<div className="box__inside">

					<form className="configurator"  onSubmit={handleSumbit}>

                    <pre>
        { JSON.stringify(wish, null, 2) }
       
     </pre>
						<div className="field">
							<label className="field__label">Pozadí stránky</label>

							<div className="field__swatch-group field__swatch-group--round">

								<div className="field__swatch">
									<input type="radio" name="background" id="background-red"  value="red" defaultChecked
                                      onClick={handleChange} />
									<label htmlFor="background-red" className="swatch--red" data-description="červená"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="background" id="background-green" value="green" 
                                     onClick={handleChange }   />
									<label htmlFor="background-green" className="swatch--green" data-description="zelená"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="background" id="background-blue" value="blue"
                                           onClick={handleChange }  />
									<label htmlFor="background-blue" className="swatch--blue" data-description="modrá"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="background" id="background-gold"
                                    value="gold" onClick={handleChange} />
									<label htmlFor="background-gold" className="swatch--gold" data-description="zlatá"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="background" id="background-tree"
                                    value="tree" onClick={handleChange} />
									<label htmlFor="background-tree" className="swatch--tree" data-description="stromeček"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="background" id="background-decorations" 
                                        value="decoration" onClick={handleChange}
                                    />
									<label htmlFor="background-decorations" className="swatch--decorations" data-description="ozdoby"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="background" id="background-snow" 
                                         value="snow" onClick={handleChange} />
									<label htmlFor="background-snow" className="swatch--snow" data-description="sníh"></label>
								</div>

							</div>

						</div>


					
						<div className="field">
							<label className="field__label">Barva přáníčka</label>

							<div className="field__swatch-group field__swatch-group--round">

								<div className="field__swatch">
									<input type="radio" name="color" id="color-red"  value="red"  onClick={handleChange}/>
									<label htmlFor="color-red" className="swatch--red" data-description="červená"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="color" id="color-green" value="green" onClick={handleChange} />
									<label htmlFor="color-green" className="swatch--green" data-description="zelená"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="color" id="color-blue" value="blue" onClick={handleChange} />
									<label htmlFor="color-blue" className="swatch--blue" data-description="modrá"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="color" id="color-gold"  value="gold" onClick={handleChange}/>
									<label htmlFor="color-gold" className="swatch--gold" data-description="zlatá"></label>
								</div>

							</div>

						</div>


						
						<div className="field">
							<label className="field__label">Obrázek na obálce</label>

							<div className="field__swatch-group field__swatch-group--big">

								<div className="field__swatch">
									<input type="radio" name="cover" id="cover-gifts"   value="gifts" onClick={handleChange} />
									<label htmlFor="cover-gifts" className="swatch--cover-gifts" data-description="dárečky"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="cover" id="cover-decorations"  value="decoration" onClick={handleChange} />
									<label htmlFor="cover-decorations" className="swatch--cover-decorations" data-description="ozdoby"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="cover" id="cover-snowflakes"  value="snowflakes" onClick={handleChange}/>
									<label htmlFor="cover-snowflakes" className="swatch--cover-snowflakes" data-description="vločky"></label>
								</div>

								<div className="field__swatch">
									<input type="radio" name="cover" id="cover-trees"  value="trees" onClick={handleChange} />
									<label htmlFor="cover-trees" className="swatch--cover-trees" data-description="stromečky"></label>
								</div>

							</div>

						</div>


						
						<div className="field">
							<label className="field__label ">Sníh na pozadí</label>

							<div className="field__radio-group">
								<div className="field__radio">
									<input type="radio" name="snow" id="snow-0"  value={0} onClick={handleChange} />
									<label htmlFor="snow-0">bez sněhu</label>
								</div>

								<div className="field__radio">
									<input type="radio" name="snow" id="snow-1"  value={1} onClick={handleChange}/>
									<label htmlFor="snow-1">málo</label>
								</div>


								<div className="field__radio">
									<input type="radio" name="snow" id="snow-2"  value={2}  onClick={handleChange} />
									<label htmlFor="snow-2">hodně</label>
								</div>
							</div>
						</div>


							
						<div className="field">
							<label className="field__label">Hudba</label>

							<div className="field__radio-group">
								<div className="field__radio">
									<input type="radio" name="music" id="music-jingle-bells"  value="jingle-bells" onClick={handleChange} />
									<label htmlFor="music-jingle-bells">Rolničky, roličky</label>
								</div>

								<div className="field__radio">
									<input type="radio" name="music" id="music-silent-night"  value="silent-night" onClick={handleChange} />
									<label htmlFor="music-silent-night">Tichá noc</label>
								</div>


								<div className="field__radio">
									<input type="radio" name="music" id="music-god-rest"  value="god-rest" onClick={handleChange}/>
									<label htmlFor="music-god-rest">Pokoj Vám</label>
								</div>
							</div>
						</div>


						
						<div className="field">
							<label className="field__label" htmlFor="text">Text uvnitř přáníčka</label>
							<textarea className="field__input" name="text" id="text" rows="3" maxLength="100" autoComplete="off" onChange={handleChange}></textarea>
							<p className="field__description">Zbývá <strong>{100-wish.text.length}</strong>/100 znaků.</p>
						</div>


						
						<div className="field">
							<label className="field__label" htmlFor="sender">Odesílatel (podpis)</label>
							<input className="field__input" type="text" name="sender" id="sender" rows="3" maxLength="20" autoComplete="off"  onChange={handleChange} />
						</div>


						
						<button type="submit" className="button button--big mt-30">Uložit přáníčko</button>

					</form>

				</div>
			</div>

		</main>
        </>
    )

}}
export default Vytvorit;