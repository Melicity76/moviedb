import React from "react";
import './index.css';
import Nfl from './nfc.png';
import Nflhova from './nfchova.png';
export class Watchone extends React.Component {
  render() {





    return (
<div class="grid-container">
    <div class='grid-child watchone'>
          <img class="card--image" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//hGUydvM9U9gByvH010c3dsMoPha.jpg" alt="Trailer Park Boys poster"></img>
          <div class="card--content watchonecontent"><h3 class="card--title">Trailer Park Boys<a href="https://www.netflix.com/watch/70143633?trackId=14170056&tctx=6%2C0%2Cc8ca60af-2c4d-49d7-b80d-d49ec6da2863-11594273%2Caaa49da6-eef7-496a-9039-ab9927c281cf_22613271X10XX1591282850586%2Caaa49da6-eef7-496a-9039-ab9927c281cf_ROOT%2C" rel="noopener noreferrer" target="_blank">
            
            
            
            
            
          
            <img class="nflogo" src={Nflhova} alt="Netflix link" />
            
            
            
            
            
            
            
            </a></h3><p><small>RELEASE DATE: 1999-07-15</small></p><p><small>RATING: 7.5</small></p><p class="card--desc watchonedesc">After a psychic predicts his death, a small-time hoodlum named Julian hires a cheap documentary film crew to document the last few days of his mis-spent life. This is the film that pioneered the show of the same name.</p></div>
    </div>

    <div class='grid-child watchtwo'>
          <img class="card--image" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//7XrRkhMa9lQ71RszzSyVrJVvhyS.jpg" alt="Star Trek Into Darkness poster"></img>
          <div class="card--content watchonecontent"><h3 class="card--title">Into Darkness</h3><p><small>RELEASE DATE: 2013-05-05</small></p><p><small>RATING: 7.3</small></p><p class="card--desc watchonedesc">When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis.</p></div>
    </div> 

    <div class='grid-child watchthree'>
          <img class="card--image" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" alt="Birds of Prey poster"></img>
          <div class="card--content watchonecontent"><h3 class="card--title">Birds of Prey</h3><p><small>RELEASE DATE: 2020-02-05</small></p><p><small>RATING: 7.3</small></p><p class="card--desc watchonedesc">Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.</p></div>
    </div> 
</div>
    );
  }
}