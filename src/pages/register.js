
import { useState, useEffect } from "react";
import FormFeild from "../components/formField";



const Register = (props) => {
    // הגדרת משתנים עבור טופס הרשמה
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [city, setCity] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    //משתנה הצגת ערים
    const [cities, setCities] = useState([])

    //udate the list of cities once the page load
    useEffect(() => {
        getCitiesFromJson();
    }, []);

    //פונקציה מוציאה את כל הנתונים(ערים) שקיימים במערך
    const getCitiesFromJson = async () => {
        let response = await fetch('./data/israel-cities.json');
        let data = await response.json(); //the values
        setCities(data);
    }







    //בדיקה עם כל נתונים מלאים
    const checkForm = () => {

        if (userName === '' || password === '' || confirmPassword === '' || city === '') {
            alert('יש למלא את כל השדות')
            return false;
        }

        else{
         return true;
        }
    }

    
    //בדיקה עם סיסמאות זהות
    const checkPassword=()=>{

        if (password === confirmPassword)
        return true;

        else {
        alert(`הסיסמאות לא תואמות`)
        return false;
        }
    }



    //בדיקה עם המייל הוזן נכון
    const checkEmail = () => {
       
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          
        if (pattern.test(email)) {
        alert('good email')
        return true;
        }

        else if (!(pattern.test(email))){
        alert('wrong email')
        return false; 
       }
    }
    
    
    

    //ההרשמה כשלוחצים על כפתור הרשמה
    const signup = (event) => {

        event.preventDefault(); //ביטול ניקוי הטופס באופן דיפולטיבי

        if (checkForm() && checkEmail() && checkPassword() ) {
            let user = { userName, password, city, name, lastName, email }
      
            localStorage.setItem('user', JSON.stringify(user))//הכנסת משתנה כדאי שישמר במאגר של נתונים
            alert(`נרשמת בהצלחה!`)
        }
    }



                                      //תבנית של הרשמה
    return (
        <div className="container">
            <form onSubmit={signup}>
                <FormFeild type="text" name="שם משתמש" action={setUserName} />
                <FormFeild type="password" name="סיסמה" action={setPassword} />
                <FormFeild type="password" name="אימות סיסמה" action={setConfirmPassword} />
                <FormFeild type="list" listId="listOfCities" data={cities} name="עיר" action={setCity} />
                <FormFeild type="text" name="שם פרטי" action={setName} />
                <FormFeild type="text" name="שם משפחה" action={setLastName} />
                <FormFeild type="text" name="אמייל" action={setEmail} />
                <button type="submit">הרשמה</button>
                <button type="reset">ניקוי</button>
            </form>
        </div>
    )
}



export default Register;