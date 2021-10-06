import React from "react";
import Styles from './Contacts.module.css'
import UniversalContainer from '../../../common/styles/container.module.css'
import {BlockTitle} from "../../../common/AdditionalComponents/blockTitle/blockTitle";
import {LocalSuperButton} from "../../../common/AdditionalComponents/LocalSuperButton/LocalSuperButton";

export const Contacts = () => {


    return (
        <div className={Styles.MainContactsStyles}>
            <div className={`${Styles.ContactsContainer} ${UniversalContainer.Container}`}>
                {/*<h2 className={Styles.ContactsHeader}>CONTACTS</h2>*/}
                <BlockTitle uniqTitle={'ontacts'} firstSymbol={'C'}/>
                <form action="" className={Styles.ContactsContent}>
                    <input type="text" placeholder={'insert text...'} className={Styles.itemsStyles}/>
                    <input type="text" placeholder={'insert text...'} className={Styles.itemsStyles}/>
                    <textarea placeholder={'insert text...'} className={Styles.itemsStyles}></textarea>
                </form>
                <div>
                    <LocalSuperButton buttonTitle={'SEND'}/>
                </div>

            </div>
        </div>
    )
}




