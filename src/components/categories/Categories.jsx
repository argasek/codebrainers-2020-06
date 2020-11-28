import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";
import axios from 'axios';

const CATEGORIES_FETCH_DELAY = 500;

class Categories extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inProgress: false,
      successCategories: undefined,
      categories: [],
    };
  }


  categoriesMapper = (item, index, arr) => (
    <CategoryItem
      category={item}
      label='category'
      key={index}
      isLastItem={arr.length - 1 === index}
      index={index}
    />
  )

  render() {
    const {
      inProgress,
      successCategories,
      categories,
    } = this.state;

    return (
      <Card>
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={inProgress} />
            {
              successCategories === false &&
              <p>Nie udało się pobrać Kategorii</p>
            }
            {
              successCategories &&
              <ListGroup className="categories">
                {
                  categories.map(this.categoriesMapper)
                }
              </ListGroup>
            }
          </div>
        </CardBody>
      </Card>
    )
  }
}


export default Categories;