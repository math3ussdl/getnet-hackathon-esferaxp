import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import XPHome from './pages/XPHome';
import MarketingTrail from './pages/Trails/Marketing';
import InstagramCautionsClass from './pages/Trails/Marketing/ClassRooms/InstagramCautionsClass';
import InstagramClass from './pages/Trails/Marketing/ClassRooms/InstagramClass';
import IGQuiz1 from './pages/Trails/Marketing/Quiz/IGQuiz1';
import IGQuiz2 from './pages/Trails/Marketing/Quiz/IGQuiz2';
import IGQuiz3 from './pages/Trails/Marketing/Quiz/IGQuiz3';
import IGQuiz4 from './pages/Trails/Marketing/Quiz/IGQuiz4';
import MicroCreditoTrail from './pages/Trails/MicroCredito';
import MicroCredClass from './pages/Trails/MicroCredito/ClassRooms/MicroCredClass';
import MicroCredQuiz1 from './pages/Trails/MicroCredito/Quiz/MicroCredQuiz1';
import MicroCredQuiz2 from './pages/Trails/MicroCredito/Quiz/MicroCredQuiz2';
import MicroCredQuiz3 from './pages/Trails/MicroCredito/Quiz/MicroCredQuiz3';
import Home from './pages/Home';
import SuccessIG from './pages/Trails/Marketing/Quiz/SuccessIG';
import SuccessMicroCred from './pages/Trails/MicroCredito/Quiz/SuccessMicroCred';
import ComingSoon from './pages/ComingSoon';


const Routes: React.FC = () => {
	return (
		<Router>
			<Switch>
        <Route exact path='/' component={Home} />

				<Route exact path='/xp' component={XPHome} />
        <Route path='/xp/trails/mkt-digital' component={MarketingTrail} />
        <Route exact path='/xp/classes/instagram' component={InstagramClass} />
        <Route path='/xp/classes/instagram/cautions' component={InstagramCautionsClass} />
        <Route exact path='/xp/quiz/ig-quiz/1' component={IGQuiz1} />
        <Route path='/xp/quiz/ig-quiz/2' component={IGQuiz2} />
        <Route path='/xp/quiz/ig-quiz/3' component={IGQuiz3} />
        <Route path='/xp/quiz/ig-quiz/4' component={IGQuiz4} />
        <Route path='/xp/quiz/ig-quiz/success' component={SuccessIG} />

        <Route path='/xp/trails/microcredito' component={MicroCreditoTrail} />
        <Route path='/xp/classes/microcredito' component={MicroCredClass} />
        <Route exact path='/xp/quiz/microcred-quiz/1' component={MicroCredQuiz1} />
        <Route path='/xp/quiz/microcred-quiz/2' component={MicroCredQuiz2} />
        <Route path='/xp/quiz/microcred-quiz/3' component={MicroCredQuiz3} />
        <Route path='/xp/quiz/microcred-quiz/success' component={SuccessMicroCred} />

        <Route path='/coming-soon' component={ComingSoon} />
			</Switch>
		</Router>
	);
};

export default Routes;
