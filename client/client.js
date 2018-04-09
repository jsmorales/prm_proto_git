class Cliente {
  //las clases mas comunes serian get y post
  constructor(){
    this.host = 'sillaruedassai.azurewebsites.net';
    this.headers = {
      "Accept": "*/*",
      //muy importante para los permisos del server
      //en GitHub, sin este header no funciona.
      //"Content-type": "application/json",
      //"User-Agent": "Cliente Node.js"
      "token": ""
    };
    this.protocolo = 'https';

  }

  /*
  //metodo de autenticacion HTTP BASIC
  autenticarBasic(user,pass){
    //Buffer pertenece al API de node.js (objeto buffer para poderlo codificar)
    //https://nodejs.org/api/buffer.html#buffer_buffer
    this.basicAuth = new Buffer(user+":"+pass).toString("base64");
  }*/

  //funcion para procesar headers para mantener sesion -> se realiza en la peticion request
  procesarHeaders(){

    this.headers = {
      "Accept": "*/*",
      //muy importante para los permisos del server
      //en GitHub, sin este header no funciona.
      //"Content-type": "application/json",
      //"User-Agent": "Cliente Node.js"
      "token": ""
    }
    //laautenticacion se guarda en los headers
    /*
    //si el metodo de basicAuth no esta definido
    if (this.basicAuth != undefined) {
      headers.Authorization = "Basic "+this.basicAuth;
      console.log("Autenticando por header: "+headers.Authorization);
    }else{
      console.log("No se ha especificado autenticación.");
    }*/

    return this.headers;
  }

  setTokenHeader(val){
    this.headers.token = val;
  }

  //Método para realizar peticiones de tipo get
  get(uri, data, callback){

    console.log(this.headers)
    
    var opciones = {
      hostname: this.host,
      //port: this.puerto,
      method: 'GET',
      path: this.protocolo+'://'+this.host+'/api'+uri,
      headers: this.headers
    }

    this.request(opciones, null, callback);
  }

  post(uri, data, callback){

    console.log(this.protocolo+'://'+this.host+'/api'+uri)

    var opciones = {
      hostname: this.host,
      port: this.puerto,
      method: 'POST',
      path: this.protocolo+'://'+this.host+'/api'+uri,
      headers: this.headers
    }

    this.request(opciones, data, callback);
  }

  //para el manejo de peticiones
  // request (manejo de peticiones)
  request(opciones, data, callback) {
      // http o https
      var http = require(this.protocolo); //http, o https
      
      var respuesta = {
          status: null,
          body: '',
          headers: null
      };

      var peticion = http.request(opciones, (canalRespuesta) => {
          canalRespuesta.on('data', (chunk) => {
              respuesta.body += chunk;
          });
          canalRespuesta.on('end', () => {
              respuesta.status = canalRespuesta.statusCode;
              respuesta.headers = canalRespuesta.headers;
              //fs.appendFile(this.logDir + "/cliente.log", "lorem ipsum");
              callback(respuesta);
          });
      });

      if (data != undefined && data != null) {
          var body = JSON.stringify(data);
          peticion.setHeader('Content-Length', Buffer.byteLength(body));
          peticion.setHeader('Content-Type', 'application/json');
          peticion.write(body);
      }
      peticion.end();
  }
  //----------------------------
}

module.exports = Cliente;