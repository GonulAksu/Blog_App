import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

//artık action ve reducer faliyetlerini kullanarak state yönetimini yapmak için 
//bir state ve artık store'a değil props'a dispatch etmek için bir propsa ihtiyacımız var
export default class FormPage extends Component {
  constructor(props) {
    super(props);
      
    //props içerisinde blog bilgisi var ise state'in title'lına blogs daki title'ı aktar 
    //çünkü Addblogpage sayfasında redux ile connect kurup içerisindeki blog bilgisini bu sayfaya göndericez
    this.state = {
      //buraya propsda blog varsa eğer şartını koymasının sebebei Editblog sayfasından gönderilen degerler için
      title:props.blog ? props.blog.title : '',
      desc:props.blog ? props.blog.desc : '',
      error: ''
    }
  }

  // //var olan bilgileri alıcaz
  // componentDidMount() {
  //   console.log('calıştı');
  //   const json = localStorage.getItem('blogs');
  //   const blogs = JSON.parse(json);
  //   if (blogs) {
  //     this.setState(blogs);
  //   }

  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("güncellendi");
  //   console.log(prevState);//statetin önceki halini döndürür
  //   console.log(this.state);//gücel hali döner

  //   // if(prevState.blogs.length !== this.state.blogs.length){
  //   // const strig=JSON.stringify(this.state.blogs)
  //   // localStorage.setItem('blogs',strig);
  //   // }
  // }

  onChangeTitle = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
    
  }
  onChangedesc = (e) => {
    const desc = e.target.value;
    this.setState(() => (
      { desc }
    ))
  }


  //Addblogpageden gelen onSubmit'te blog bilgisini göndermeliyiz
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title && this.state.desc) {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        title: this.state.title,
        desc: this.state.desc,
        dateAdded: Date.now()

      })
    }
    else {
      this.setState(() => (
        { error: 'lütfen degerleri giriniz.' }
      ))
    }

  }

  render() {
    return (
      <div className='container bg-info mt-5 p-4 rounded' >

        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.onSubmit}  >
          
          <div className="mb-3 input-group">
            <span className='input-group-text' id="title">Title</span>
            <input type="text" className='form-control' aria-label='title' value={this.state.title} onChange={this.onChangeTitle} placeholder="title" />

          </div>
          <div className="mb-3 form-floating">
            <textarea className='form-control' id="desc"  onChange={this.onChangedesc} placeholder="description"></textarea>
            <label htmlFor="desc">Description</label>
          </div>

          <button type='submit' className='btn btn-dark'>add</button>
        </form>
      </div>
    )
  }
}
