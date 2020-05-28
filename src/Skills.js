import React from 'react';
import { FcApproval } from "react-icons/fc";
import "./App.css"

const Skills = () => (
        <div className="skills-page">
           <ul className="skills-list">
               <h2>Umiejętności</h2>
               <li><FcApproval size={28}/>Jestem w stanie umiejętnie zorganizować swój czas w pracy tak, aby dotrzymać wyznaczonych od górnie terminów.</li>
               <li><FcApproval size={28}/>Praca pod presją czasu lub stres często działają na mnie jako dodatkowy stymulant, aniżeli coś co miałoby mnie spowalniać.</li>
               <li><FcApproval size={28}/>Jestem bardzo swieży w tej branży, ale zdążyłem zauważyć, iż jest to zawód gdzie trzeba cały czas mierzyć sie z problemem i starać się go rozwiązywać za kazdym razem na lepszy sposób.</li>
               <li><FcApproval size={28}/>Jestem bardzo cierpliwą osobą oraz będę starać się komunikować ze swoim zespołem odnośnie wszystkich niejasności, czy też pomagać moim kolegom w jakikolwiek sposób będę w stanie.</li>
               <li><FcApproval size={28}/>Jako że nad psychologią spędziłem troche czasu, zdaje sobie sprawe z tego jak ważna jest rozmowa między ludźmi oraz jak ważna jest współpraca w większych projektach. 
               Często to nie umiejętności są przeszkodą a nasze nastawienie.</li>
               <li><FcApproval size={28}/>Jestem w stanie używać HTML/CSS/JavaScript/React.js/Git/Github na bardzo dobrym poziomie, nie mam doświadczenia w pracy jeszcze z tymi narzędziami jednakże poprzez dostępny materiał online oraz kursy starałem się wyciągnąć jak najwięcej, aby być przygotowanym na podjęcie pracy. 
               Oprócz odpłatnego stacjonarnego kursu 5 dni w tyg w Akademi 108 w Krakowie, podjąłem CS50's Web Programming with Python and Javascript oraz CS50's Introduction to Computer Science.</li>
           </ul>
        </div>
)
    
export default Skills;