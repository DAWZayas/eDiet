import React, {Component} from 'react';
import {Route} from 'react-router';
import {Spinner} from '../spinner';
import DeleteModal from '../modals/tableDeleteModal';
import UpdateTable from '../updateTable';
import {Link} from 'react-router';
import InfiniteScroll from 'redux-infinite-scroll';
import {registerTableObservable} from '../../store/realTime';
import Table from '../draw/table';

const styles = require('./style.scss');
// ${styles. }

export default class Get extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {payload: observable} = this.props.addObservable(registerTableObservable(this.props.tables));
    this.state={observable};
  }

  componentWillUnmount() {
    const {removeObservable} = this.props;
    const {observable} = this.state;
    removeObservable(observable);
  }

  render(){
    const {getTables, hasMore, loadingMore, deleteTable, tables, status, addObservable, removeObservable} = this.props;

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
                  <Table
                    key={index}
                    obj={obj}
                    deleteTable={deleteTable}
                    addObservable={addObservable}
                    removeObservable={removeObservable}/>
                )}
              </InfiniteScroll>
              }
              </div>
      </div>
    );
  }
}
