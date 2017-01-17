import React, {Component} from 'react';
import {Route} from 'react-router';
import {Spinner} from '../spinner';
import DeleteModal from '../modals/tableDeleteModal';
import UpdateTable from '../updateTable';
import {Link} from 'react-router';
import InfiniteScroll from 'redux-infinite-scroll';

const styles = require('./style.scss');
// ${styles. }

export default class Get extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('>>>Proops', this.props);

    const {getTables, hasMore, loadingMore, deleteTable, tables, status} = this.props;
    const onLoadMore = () => getTables({
      skip: tables.length,
      limit: 10,
     });
    return(
      <div className="panel panel-default">
          <div className={`panel-heading ${styles.header}`}>
            <p>
              Tablas
            </p>
            <button className={"btn btn-default"}>
              <Link to="/tables/addTable">
                <i className="fa fa-plus" aria-hidden="true"></i>
                Tabla
              </Link>
            </button>
          </div>
              <div className={"panel-body"}>
              {!hasMore && tables.length === 0 ?
                <p>Sin tablas</p>
              :
                <InfiniteScroll
                  elementIsScrollable={false}
                  loadMore={onLoadMore}
                  hasMore={hasMore}
                  loadingMore={loadingMore}
                  loader={<Spinner />}
                >
                {tables.map((obj, index) =>
                  <div key={index} className={`${styles.body}`}>
                    <ul>
                      <li>
                        <div>
                          <DeleteModal deleted={obj} deleteTable={deleteTable} />
                          <button className="btn btn-default">
                            <Link to={`/tables/update/${obj.name}`} >
                              <i className="fa fa-pencil" aria-hidden="true"></i>
                            </Link>
                          </button>
                        </div>
                        <p>
                          <Link to={`/tables/${obj.name}`}>
                            {obj.name}
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </InfiniteScroll>}
              </div>
      </div>
    );
  }
}
