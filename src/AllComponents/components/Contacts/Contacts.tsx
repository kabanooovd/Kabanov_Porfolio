import React from "react";
import Styles from './Contacts.module.css'
import UniversalContainer from '../../../common/styles/container.module.css'

export const Contacts = () => {


    return (
        <div className={Styles.MainContactsStyles}>
            <div className={`${Styles.ContactsContainer} ${UniversalContainer.Container}`}>
                <h2 className={Styles.ContactsHeader}>CONTACTS</h2>
                <div className={Styles.ContactsItems}>
                    <form action="" className={Styles.ContactsContent}>
                        <input type="text" placeholder={'insert text...'}/>
                        <input type="text" placeholder={'insert text...'}/>
                        {/*<textarea name="" id="" cols="30" rows="10"></textarea>*/}
                        <textarea placeholder={'insert text...'}></textarea>
                    </form>
                    <div className={Styles.SendBtn}>SEND</div>
                </div>

            </div>
        </div>
    )
}




