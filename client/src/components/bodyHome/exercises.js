import React, {Component} from 'react';
import InputPicture from '../inputFile/image';
import InputText from '../inputFile/text';
import {server as serverConfig} from '../../../config';

const styles = require('./style.scss');

export default class ExercisePart extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className ={`col-sm-12 col-md-6 ${styles.exercise}`}>
        {this.props.user?
          this.props.user.role ?
            <h2>Change exercise part</h2>
          : null
        : null}
        <center>
          <h3 className={`${styles.title}`}>Exercise</h3>
          <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/home/exercise.` + 'jpg' || 'png'} className={`${styles.exerciseImg}`} alt="..." />
          {this.props.user?
            this.props.user.role ?
            <span>
              <InputPicture name='exercise' route='home'/>
              <p>
                {`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/texts/exercise.txt`}
              </p>
            </span>
            : <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          : <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>}
        </center>
        <br/>

        {this.props.user?
          this.props.user.role ?
            <InputText name='exercise' route='home' />
          : null
        : null}
      </div>
    );
  }
}
