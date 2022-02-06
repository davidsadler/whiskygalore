import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Menu from '../sections/Menu'
import Header from '../sections/Header'
import Intro from '../sections/Intro'
import Tabs from '../sections/Tabs'
import Cards from '../sections/Cards'
import ContentRight from '../sections/ContentRight'
import Contact from '../sections/Contact'
import Form from '../sections/Form'
import FooterInfo from '../sections/FooterInfo'
import Footer from '../sections/Footer'

const GET_HOMEPAGE = gql`
{
  entry(slug: "homepage") {
    ... on homepage_homepage_Entry {
      title
      menu {
        ... on menu_item_BlockType {
          itemTitle
          itemUrl
        }
      }
      headlines {
        ... on headlines_headline_BlockType {
          id
          heading
          description
          linkText
          linkUrl
          tabText
        }
      }
      introHeading
      introDescription
    }
  }
}
`

const Homepage = () => {
    const { loading, error, data } = useQuery(GET_HOMEPAGE);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    let entry = data.entry;

    return (
        <React.Fragment>
            <Menu items={entry.menu}/>
            <div className="container-wrapper">
                <div className="container">
                    <Header headlines={entry.headlines}/>
                    <Intro heading={entry.introHeading} description={entry.introDescription}/>
                    <Tabs/>
                    <Cards/>
                    <ContentRight/>
                    <Contact/>
                    <Form/>
                    <FooterInfo/>
                    <Footer/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Homepage