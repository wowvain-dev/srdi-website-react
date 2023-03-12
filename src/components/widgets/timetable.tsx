import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export interface Hour {
    key: number,
    ora: string,
    // days: Array<SessionDetails | null>
    // days: (SessionDetails|null)[]
    luni: SessionDetails|null, 
    marti: SessionDetails|null, 
    miercuri: SessionDetails|null, 
    joi: SessionDetails|null, 
    vineri: SessionDetails|null, 
    sambata: SessionDetails|null, 
    duminica: SessionDetails|null, 
};

interface TimetableProps {
    values: Hour[]
}

export type SessionDetails = {
    trainer: string,
    level: string
}

const columns: ColumnsType<Hour> = [
    {
        key: "ora",
        title: "Ora",
        dataIndex: "ora",
        render: (text) => <h1 className="text-2xl">{text}</h1>
    },
    {
        key: "luni",
        title: "Luni",
        dataIndex: "luni",
        render: () => <h3>Test</h3>
    }, {
        key: "marti",
        title: "Marţi",
        dataIndex: "marti",
    }, {
        key: "miercuri",
        title: "Miercuri",
        dataIndex: "miercuri",
    }, {
        key: "joi",
        title: "Joi",
        dataIndex: "joi"
    }, {
        key: "vineri",
        title: "Vineri",
        dataIndex: "vineri"
    }, {
        key: "sambata", 
        title: "Sâmbătă",
        dataIndex: "sambata"
    }, {
        key: "duminica",
        title: "Duminică",
        dataIndex: "duminică"
    }
];

export function Timetable({values}: TimetableProps) {
    console.log(values);
    return(
        <div>
           <Table<Hour> dataSource={values} className="schedule"
            pagination={false} scroll={{y: "60vh", x: true}}
           >
                <Table.Column<Hour> key="ora" title="Ora" dataIndex="ora"
                fixed='left'
                    render={(text) => <div><b className="text-lg">{text}</b></div>}
                />
                <Table.Column<Hour> key="luni" title="Luni" dataIndex="luni"
                    render={(session) => {
                        if (session === null) return (null);
                        return (<div className="session_card"
                            style={
                                {
                                    // // borderWidth: "3px": "3px",
                                    backgroundColor: session.level === "Începători"
                                        ? "#a7d489" : session.level === "Mediu"
                                        ? "#f7ef99" : session.level === "Mediu & Avansaţi"
                                        ? "#f5b031" : session.level === "Avansaţi"
                                        ? "#ff6961" : session.level === "Grupa Adulţi"
                                        ? "#ddd" : "#ccc"
                                }
                            }
                        >
                            <h2>{session.level}</h2>
                            <p>{session.trainer}</p>
                        </div>)
                    }}
                />
                <Table.Column<Hour> key="marti" title="Marţi" dataIndex="marti"
                    render={(session) => {
                        if (session === null) return (null);
                        return (<div className="session_card"
                            style={
                                {
                                    // borderWidth: "3px": "3px",
                                    backgroundColor: session.level === "Începători"
                                        ? "#a7d489" : session.level === "Mediu"
                                        ? "#f7ef99" : session.level === "Mediu & Avansaţi"
                                        ? "#f5b031" : session.level === "Avansaţi"
                                        ? "#ff6961" : session.level === "Grupa Adulţi"
                                        ? "#ddd" : "#ccc"
                                }
                            }
                        >
                            <h2>{session.level}</h2>
                            <p>{session.trainer}</p>
                        </div>)
                    }}
                />
                <Table.Column<Hour> key="miercuri" title="Miercuri" dataIndex="miercuri"
                    render={(session) => {
                        if (session === null) return (null);
                        return (<div className="session_card"
                            style={
                                {
                                    // borderWidth: "3px": "3px",
                                    backgroundColor: session.level === "Începători"
                                        ? "#a7d489" : session.level === "Mediu"
                                        ? "#f7ef99" : session.level === "Mediu & Avansaţi"
                                        ? "#f5b031" : session.level === "Avansaţi"
                                        ? "#ff6961" : session.level === "Grupa Adulţi"
                                        ? "#ddd" : "#ccc"
                                }
                            }
                        >
                            <h2>{session.level}</h2>
                            <p>{session.trainer}</p>
                        </div>)
                    }}
                />
                <Table.Column<Hour> key="joi" title="Joi" dataIndex="joi"
                    render={(session) => {
                        if (session === null) return (null);
                        return (<div className="session_card"
                            style={
                                {
                                    // borderWidth: "3px": "3px",
                                    backgroundColor: session.level === "Începători"
                                        ? "#a7d489" : session.level === "Mediu"
                                        ? "#f7ef99" : session.level === "Mediu & Avansaţi"
                                        ? "#f5b031" : session.level === "Avansaţi"
                                        ? "#ff6961" : session.level === "Grupa Adulţi"
                                        ? "#ddd" : "#ccc"
                                }
                            }
                        >
                            <h2>{session.level}</h2>
                            <p>{session.trainer}</p>
                        </div>)
                    }}
                />
                <Table.Column<Hour> key="vineri" title="Vineri" dataIndex="vineri"
                    render={(session) => {
                        if (session === null) return (null);
                        return (<div className="session_card"
                            style={
                                {
                                    // borderWidth: "3px": "3px",
                                    backgroundColor: session.level === "Începători"
                                        ? "#a7d489" : session.level === "Mediu"
                                        ? "#f7ef99" : session.level === "Mediu & Avansaţi"
                                        ? "#f5b031" : session.level === "Avansaţi"
                                        ? "#ff6961" : session.level === "Grupa Adulţi"
                                        ? "#ddd" : "#ccc"
                                }
                            }
                        >
                            <h2>{session.level}</h2>
                            <p>{session.trainer}</p>
                        </div>)
                    }}
                />
                <Table.Column<Hour> key="sambata" title="Sâmbătă" dataIndex="sambata"
                    render={(session) => {
                        if (session === null) return (null);
                        return (<div className="session_card"
                            style={
                                {
                                    // borderWidth: "3px": "3px",
                                    backgroundColor: session.level === "Începători"
                                        ? "#a7d489" : session.level === "Mediu"
                                        ? "#f7ef99" : session.level === "Mediu & Avansaţi"
                                        ? "#f5b031" : session.level === "Avansaţi"
                                        ? "#ff6961" : session.level === "Grupa Adulţi"
                                        ? "#ddd" : "#ccc"
                                }
                            }
                        >
                            <h2>{session.level}</h2>
                            <p>{session.trainer}</p>
                        </div>)
                    }}
                />
                {/* <Table.Column<Hour> key="duminica" title="Duminică" dataIndex="duminica"
                    render={(session) => {
                        if (session === null) return (null);
                        return (<div className="session_card"
                            style={
                                {
                                    // borderWidth: "3px": "3px",
                                    backgroundColor: session.level === "Începători"
                                        ? "#a7d489" : session.level === "Mediu"
                                        ? "#f7ef99" : session.level === "Mediu & Avansaţi"
                                        ? "#f5b031" : session.level === "Avansaţi"
                                        ? "#ff6961" : session.level === "Grupa Adulţi"
                                        ? "#ddd" : "#ccc"
                                }
                            }
                        >
                            <h2>{session.level}</h2>
                            <p>{session.trainer}</p>
                        </div>)
                    }}
                /> */}
            </Table>
        </div>
    );
}