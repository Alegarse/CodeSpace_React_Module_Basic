# UseEffect
   
   Tenemos 3 formas de usar useEffect 

   ```js
      //Use Effect tiene 2 parámetros:
      useEffect(callbackFn, dependencies?)
   ```

   La primera:
   Se ejecuta una sola vez en la carga inicial del componente. Lo utilizamos para cargar datos desde el back o inclusive para 
   cargar el componente. Y por que se ejecuta una sola vez? Pues porque en el segundo parámetro del useEffect ponemos un array sin elementos,
   es decir, un '[]'
  
   useEffect(() => {}, [])

  La segunda forma: 
    La vecina chismosa, que es básicamente, que useEffect está escuchando todo el rato una variable de estado y comprobando si esta cambia 
    o no. 
```js
    'SOLEADO' | 'NUBLADO' | 'LLUVIA'
    const [tiempo, setTiempo] = useState('SOLEADO')

    useEffect(() => {
      mirarCieloPorSiLlueve()
    }, [tiempo])
```
  La última forma que NO SE USA: 
   es el useEffect sin parámetro. No se usa porque cuando se usa, siempre que ocurra un cambio en un componnete lo que ocurrirá será 
   que se volverá a ejecutar el useEffect y quizás no es lo que queremos.
  useEffect(() => {})