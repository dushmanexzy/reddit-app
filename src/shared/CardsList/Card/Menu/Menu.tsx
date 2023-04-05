import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList/GenericList";
import {generateId} from "../../../../utils/react/generateRandomIndex";

const menuButtonSvg: React.SVGProps<SVGSVGElement> =
  <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
    <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
    <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
  </svg>;

const DROPDOWN_MENU_LIST = [
  {As: 'li' as const, text: 'Комментарии', className: styles.menuItem},
  {As: 'li' as const, text: 'Поделиться', className: styles.menuItem},
  {As: 'li' as const, text: 'Скрыть', className: styles.menuItem},
  {As: 'li' as const, text: 'Сохранить', className: styles.menuItem},
  {As: 'li' as const, text: 'Пожаловаться', className: styles.menuItem}
].map(generateId)

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            {menuButtonSvg}
          </button>
        }
      >
        <ul className={styles.menuList}>
          <GenericList list={DROPDOWN_MENU_LIST}/>
        </ul>
      </Dropdown>
    </div>
  );
}
