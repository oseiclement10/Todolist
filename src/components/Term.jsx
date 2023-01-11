import {Form,Col, Select,Row}   from "antd";

const SelectTerm = () => {
    const terms = ["Term 1","Term 2","Term 3"];
    return (
    <Form>
        <Row>
            <Col span={6}>
             <Form.Item label="Select Term">
                 <Select 
                     options={terms.map(elem=>{
                         return {label:elem, value:elem}
                     })}
                     placeholder={"--Select Term"}
                 >
                </Select>
            </Form.Item>
            </Col>
        </Row>
    </Form>
    )
}

export default SelectTerm;