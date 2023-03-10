// import {MeasurementIcon, CatalogueIcon, UploadIcon, FolderIcon} from "../../assets/svg";
import MeasurementIcon from "../../assets/svg/measurement.svg"
import CatalogueIcon from "../../assets/svg/catalogue.svg"
import UploadIcon from "../../assets/svg/upload.svg"
import FolderIcon from "../../assets/svg/folder.svg"
import "./Services.css";

export default function Services () {
    return (
        <div id="services">
            <h2>Services you will enjoy</h2>
            <div className="services">
                <div className="service">
                    <img src={MeasurementIcon} alt="Measurement Icon"/>
                    <h4>Measurement</h4>
                    <p>Store your customers measurements and style</p>
                </div>

                <div className="service">
                <img src={CatalogueIcon} alt="Catalogue Icon"/>
                    <h4>Catalogue</h4>
                    <p>Have a style catalogue for your customers</p>
                </div>

                <div className="service">
                <img src={UploadIcon} alt="Upload Icon"/>
                    <h4>Upload</h4>
                    <p>Upload inspirations and customers styles</p>
                </div>

                <div className="service">
                <img src={FolderIcon} alt="Folder Icon"/>
                    <h4>Customer folder</h4>
                    <p>Manage customers folder without stress</p>
                </div>
            </div>
        </div>
    )
}