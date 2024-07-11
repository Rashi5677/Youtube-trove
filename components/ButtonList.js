import React from 'react';
import Button from './Buttons';
const list=["All","Gaming","Songs","Live","Cricket","Entertainment","News","Booking","Cooking","Sports","Technology","Comedy",];
const ButtonList = () => {
  return (
    <div className="flex">
   <Button name="All"/>
     <Button name="Gaming"/>
     <Button name="Songs"/>
     <Button name="Live"/>
     <Button name="Cricket"/>
     <Button name="Entertainment"/>
     <Button name="News"/>
     <Button name="Booking"/>
     <Button name="Cooking"/>
     <Button name="Sports"/>
     <Button name="Technology"/>
     <Button name="Comedy"/>
    </div>
  )
}

export default ButtonList;
