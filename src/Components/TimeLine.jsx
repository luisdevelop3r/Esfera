const TimeLine = () => {
    const events = [
        { date: '2003', title: 'Año de Establecimiento' },
        { date: '2008', title: '26 Proyectos Completados' },
        { date: '2012', title: '870 Constructores Contratados' },
        { date: '2020', title: '26 Premios Obtenidos' },
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="timeline-line h-full w-full flex items-center">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-marker ${index === 0 ? 'timeline-marker-first' : ''} ${index === events.length - 1 ? 'timeline-marker-last' : ''
                            }`}
                    >
                        <div className="timeline-marker-dot"></div>
                        <div className="timeline-marker-content">
                            <span className="timeline-marker-date">{event.date}</span>
                            <span className="timeline-marker-title">{event.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { TimeLine };