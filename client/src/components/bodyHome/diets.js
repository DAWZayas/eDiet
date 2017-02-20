import React, {Component} from 'react';
import InputPicture from '../inputFile/image';
import InputText from '../inputFile/text';
import {server as serverConfig} from '../../../config';

const styles = require('./style.scss');

export default class DietPart extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className ={`col-sm-12 col-md-6 ${styles.diet}`}>
        {this.props.user?
          this.props.user.role ?
            <h2>Change diet part</h2>
          : null
        : null}
        <center>
          <h3 className={`${styles.title}`}>Diet</h3>
          <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/home/diet.` + 'jpg' || 'png'} className={`${styles.exerciseImg}`} alt="..." />
            {this.props.user?
              this.props.user.role ?
              <span>
                <InputPicture name='diet' route='home'/>
                <p>
                  {`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/texts/diet.txt`}
                </p>
              </span>
              : <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            : <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>}
        </center>
        <br/>

        {this.props.user?
          this.props.user.role ?
            <InputText name='diet' route='home' />
          : null
        : null}
      </div>
    );
  }
}
