# musicAPI 
Ejemplo de una API RESTFul para gestionar cantantes 👨‍🦲 y canciones 🎵

## Dependencias
- express
- dotenv
- nodemon
- mongoose

## Cantantes

Schema Singer
```json
{
  id:Number,
  name:String
  country:String
  songs : [Song]
}
```

### End-Points

- http://127.0.0.1/singer - GET. Recupera todos los registros
- http://127.0.0.1/singer/:id - GET. Busca por ID
- http://127.0.0.1/singer/ - POST. Adiciona un nuevo registro
- http://127.0.0.1/singer/:id - PUT. Actualiza un registro
- http://127.0.0.1/singer/:id - DELETE. Elimina un regsitro

## Canciones

Schema Song
```json
{
  id:Number,
  name:String,
  duration:Number,
  singer : Singer,
}
```

### End-Points

- http://127.0.0.1/song - GET. Recupera todos los registros
- http://127.0.0.1/sing/:id - GET. Busca por ID
- http://127.0.0.1/song/:id - POST. Adiciona un nuevo registro
- http://127.0.0.1/song/:id - PUT. Actualiza un registro
- http://127.0.0.1/song/:id - DELETE. Elimina un regsitro
