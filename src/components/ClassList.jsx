import SelectTerm from "./Term";
import {Row,Col} from 'antd';

const ClassList = () => {
    return (
    <>
     <SelectTerm/>
     <Row className="bg-white">
        <Col span={24}>
        </Col>
     </Row>
    </>
    )
}
export default ClassList;