import LeftFilter from "../components/LeftFilter"
import axios from "axios"
import { useEffect, useState } from "react"
import { classType } from "../@types/apiTypes/classType"
const WikiDetail = () => {

    const [classes, setClasses] = useState<Array<classType>>([])

    useEffect(() => {
        const fetchClasses = async() => {
            const data = await axios.get('https://www.dnd5eapi.co/api/classes')
            setClasses(data.data.results)
        }
        fetchClasses()
    },[])
    return(
        <div>
            <LeftFilter classes={classes}/>
            <div className="ml-40 pt-[10vh]">
                <div>
                    <p className="text-white text-lg text-center pt-4 font-bold">Whats is a spell</p>
                    <div className="bg-main w-1/2 m-auto p-4 rounded-md text-base">
                        <p>
                            A spell is a magical ability that a character can cast to produce a variety of effects. Spells can be cast by characters who have the ability to use magic, such as wizards, sorcerers, clerics, and other spellcasting classes.
                            <br />
                            A spell is typically composed of three components: the verbal component, the somatic component, and the material component. The verbal component is the spoken incantation that activates the spell, the somatic component is the physical gesture that accompanies the spell, and the material component is the physical object that is required to cast the spell.
                        </p>
                    </div> 
                </div>
                <div>
                    <p className="text-white text-lg text-center pt-4 font-bold">How to use a spell</p>
                    <div className="bg-main w-1/2 m-auto p-4 rounded-md text-base">
                        <p>
                        To use a spell in D&D, you must first have the necessary components. These components may include verbal incantations, somatic gestures, and material components such as a wand or a pouch of herbs.
                        <br />
                        Once you have the necessary components, you must declare that you are casting the spell and describe the actions and words that your character is using to cast the spell. The Dungeon Master (DM) will then determine if the spell is successful, and what effects it has on the game world and any creatures or objects within it.
                        </p>
                    </div> 
                </div>
                <div>
                    <p className="text-white text-lg text-center pt-4 font-bold">Whats is a spell</p>
                    <div className="bg-main w-1/2 m-auto p-4 rounded-md text-base">
                        <p>
                            A spell is a magical ability that a character can cast to produce a variety of effects. Spells can be cast by characters who have the ability to use magic, such as wizards, sorcerers, clerics, and other spellcasting classes.
                            <br />
                            A spell is typically composed of three components: the verbal component, the somatic component, and the material component. The verbal component is the spoken incantation that activates the spell, the somatic component is the physical gesture that accompanies the spell, and the material component is the physical object that is required to cast the spell.
                        </p>
                    </div> 
                </div>
                <div>
                    <p className="text-white text-lg text-center pt-4 font-bold">How to use a spell</p>
                    <div className="bg-main w-1/2 m-auto p-4 rounded-md text-base">
                        <p>
                        To use a spell in D&D, you must first have the necessary components. These components may include verbal incantations, somatic gestures, and material components such as a wand or a pouch of herbs.
                        <br />
                        Once you have the necessary components, you must declare that you are casting the spell and describe the actions and words that your character is using to cast the spell. The Dungeon Master (DM) will then determine if the spell is successful, and what effects it has on the game world and any creatures or objects within it.
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default WikiDetail