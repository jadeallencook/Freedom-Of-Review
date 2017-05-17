// import react frameworks
import React, {Component} from 'react';

// import css
import '../../css/components/add-content.css';

// login page build
class AddContent extends Component {
    render() {
        function openOfficeModule() {
            document.getElementById('open-office-btn').style.display = 'none';
            document.getElementById('add-content-header').style.display = 'none';
            document.getElementById('add-office').style.display = 'block';
        }
        return (
            <div id="add-content">
                <h1 id="add-content-header">Can't Find The Office You're Looking For?</h1>
                <a id="open-office-btn" onClick={openOfficeModule}>Click Here To Add An Office</a>
                <div id="add-office">
                    <h1>Add Office</h1>
                    <input id="office-name" type="text" placeholder="Office Name"/><br/>
                    <input id="office-street" type="text" placeholder="Street Address"/>
                    <input id="office-city" type="text" placeholder="City"/>
                    <input id="office-state" type="text" placeholder="State"/><br/>
                    <input id="office-website" type="text" placeholder="Website"/>
                    <input type="submit" value="Submit Office"/>
                </div>
            </div>
        );
    }
}

export default AddContent;
