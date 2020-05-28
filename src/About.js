import React from 'react';
import { AiFillStar } from 'react-icons/ai'
import "./App.css"

const About = () => (
    <div className="about-page">
        <ul className="about-list">
            <h2>Zainteresowania</h2>
            <li><AiFillStar size={28} />Jestem zwolennikiem aktywności fizycznej w każdej postaci jako, że przekłada się to na lepszą jakość pracy. 
            Osobiście jest to trening siłowy jednakże namawiam każdego, aby te 30 minut dziennie poświęcić na jakikolwiek rodzaj wysiłku</li>
            <li><AiFillStar size={28} />Intellectual dark web, chodzi mi o wszystkich myślicieli obecnych czasów którzy nie przyjmują z góry przyjętych norm i poprawności politycznej, rozmawiając na ważne tematy które często so pomijane.
            Najczęściej są to podcasty Lex Fridman, Joe Rogan Experience jak również osoby Jordan Peterson, Eric i Bret Weinstein oraz wiele innych ciekawych osobistości.</li>
            <li><AiFillStar size={28} />E-Sport czyli coraz bardziej rozwijające się zawody w różne gry komputerowe, jestem ich dużym fanem. </li>
            <li><AiFillStar size={28} />Tesla/Spacex bardzo interesuje mnie mechanizm w jakim działają samochody elektryczne i zapewne nie długo w pełni autonomiczne jak Tesla. 
            Spacex natomiast jest interesujący sam w sobie, bo być może w końcu zaczniemy odwiedzać miejsca które obserwujemy całe życie, a wydają sie tak odległe.</li>
            <li><AiFillStar size={28} />Psychologia, byłem studentem psychologii przez 3 lata, głównie interesowała mnie psychologia kryminalna, kryminologia, ale również mowa ciała, komunikacja niewerbalna.
            Obecnie jest to głównie jak działa nasz mózg, w jaki sposób można polepszyć nas samych.</li>
        </ul>
    </div>
)

export default About;