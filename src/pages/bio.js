import React from 'react'

import Layout from '../components/layout'

import Section from '../components/Section'

//Styles

const IndexPage = () => (
  <Layout>
    <div>
      <div className="HeroBio">
        <div className="HeroGroupBio">
          <h1>Bio</h1>
        </div>
      </div>
      <Section
        image={require('../images/pim-myten-m41k1lTzjVM-unsplash.jpg')}
        logo={require('../images/CronjeEmpyreWhite.svg')}
        title="Bio"
        text="Andreas “Cronje” Michael Strand (SE) & Matt “Empyre” (NZ) met for the first time at a techno party in Stockholm, Sweden.

        It was here they were to develop a new kind of friendship together that would shape the foundations for the newly started but over 15 years experienced DJ & production duo partnership.
        Matt Empyre; 
        Based in Stockholm, Sweden but born in New Zealand. Matt has spent a decade involved in the small yet, passionate house and techno scenes throughout his home country.
        
        DJing and Promoting has been his main contributions to the scene, hosting Carl Cox for his first Wellington gig in 2014.
        
        It was a chance meeting and conversation with Carl Cox a year prior that kickstarted Matt Empyre’s production career.
        
        Andreas Cronje Michael Strand;
        Born in the outskirts of Stockholm, Sweden. Andreas has always had a big interest 
        in music growing up prior to being a guitarist playing in a metal cover band to becoming a sound engineer and a techno enthusiastic.
        
        Andreas has spent the last 6 years gathering experience and creating bonds on different dancefloors around the world, behind the decks and on the sets. Now he has finally come to the bar of realeasing his own productions together with his partner.
        Together they form Cronje Empyre.
        
        Andreas  matt had their first gig together at Slakthuset, Stockholm sweden 2018-06-29.
        
        Link to the set can be found here (Soft Daytime gig):
        https://www.mixcloud.com/CronjeEmpyre/slakthuset-live-recording-part-1/
        Empyre state of Tech featuring Cronje Empyre(Hard Techno):
        https://www.mixcloud.com/mattempyre/empyre-state-of-tech-003-feat-black-fish/"
      />
    </div>
  </Layout>
)

export default IndexPage
