import { Fragment, React } from "react";
import homeImage from '../images/home-image.png';
import "../styles/Menu.css";

export function Menu() {
    return (
        <Fragment>
            <table>
                <tr>
                    <th>
                        <img src={homeImage} className="imageHome"/>
                    </th>
                    <th>
                        dashboard
                    </th>
                </tr>
                <tr>
                    <th>
                        perra
                    </th>
                </tr>
            </table>
        </Fragment>
    );
}