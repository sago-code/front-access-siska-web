import { Fragment, React } from "react";
import '../styles/MainPage.css';

export function MainPage() {
    return (
        <Fragment>
            <div className="main-ontainer">
                <span>Customers</span>
                <table>
                    <thead>
                        <tr>
                            <th>Name(job title)</th>
                            <th>Age</th>
                            <th>Nickname</th>
                            <th>Employee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Giacomo guilizzoni founder & CEO</td>
                            <td>40</td>
                            <td>Peldi</td>
                            <td className="employee"><input type="radio" id="employee" name="employee" checked/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}