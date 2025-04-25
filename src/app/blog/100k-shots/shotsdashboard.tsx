'use client';

import { useEffect, useState } from 'react';
import {
    Legend,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

// Assume the data array and locationColors object are already populated correctly
interface DataPoint {
    date: number;
    shots: number;
    location: string;
}

interface LocationColors {
    [key: string]: string;
}

// Define your actual location colors here. Update the keys/values as needed.
const locationColors: LocationColors = {
    outside: '#FF9800', // Orange
    'maple point': '#4CAF50', // Green
    nac: '#2196F3', // Blue
    aau: '#9C27B0', // Purple
    workouts: '#F44336', // Red
    mixed: '#607D8B', // Blue Grey
    'poplar park': '#009688', // Teal
};

const switchTime = new Date('2019-05-23').getTime();
const mentalBreakdownTime = new Date('2019-03-09').getTime();
const firstTournamentTime = new Date('2019-04-06').getTime();
const aauAndHighSchoolOverlap = new Date('2019-03-31').getTime();

interface ChartSectionProps {
    filterFn: (d: DataPoint) => boolean;
    title: string;
}

// Define a type for the custom dot props
interface CustomDotProps extends React.SVGProps<SVGCircleElement> {
    payload: DataPoint;
    [key: string]: unknown; // Avoids 'any', keeps flexibility for extra recharts props
}

const ChartSection: React.FC<ChartSectionProps> = ({ filterFn, title }) => {
    // State for fetched data
    const [sectionData, setSectionData] = useState<DataPoint[]>([]);
    const [data, setData] = useState<DataPoint[]>([]);

    useEffect(() => {
        fetch('/shots_data.json')
            .then(res => res.json())
            .then(json => (Array.isArray(json) ? setData(json as DataPoint[]) : setData([])));
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            setSectionData(data.filter(filterFn));
        }
    }, [data, filterFn]);

    // Calculate average shots for the section
    const totalShots = sectionData.reduce((sum, d) => sum + d.shots, 0);
    const averageShots = sectionData.length > 0 ? totalShots / sectionData.length : 0;

    // Custom legend for location colors
    const LocationLegend = () => (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                alignItems: 'center',
                marginBottom: 8,
            }}>
            {Object.entries(locationColors).map(([location, color]) => (
                <span key={location} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width='16' height='16' style={{ display: 'inline-block' }}>
                        <circle cx='8' cy='8' r='6' fill={color} stroke='#fff' strokeWidth='1' />
                    </svg>
                    <span style={{ fontSize: 14 }}>{location}</span>
                </span>
            ))}
        </div>
    );

    return (
        <div className='mb-8 p-2'>
            <h2 className='mb-2 text-xl font-bold'>{title}</h2>
            <LocationLegend />
            <div className='h-96'>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                        data={sectionData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis
                            dataKey='date'
                            type='number'
                            scale='time'
                            domain={['dataMin', 'dataMax']}
                            tickFormatter={(time: number) =>
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                }).format(time)
                            }
                        />
                        <YAxis />
                        <Tooltip
                            labelFormatter={(time: number) =>
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                }).format(time)
                            }
                            // Remove extra colon by returning null as the name
                            formatter={(value: number) => [`Shots: ${value}`, null]}
                            contentStyle={{
                                backgroundColor: '#222',
                                border: 'none',
                                color: '#fff',
                            }}
                            labelStyle={{ color: '#fff' }}
                        />
                        <Line
                            type='monotone'
                            dataKey='shots'
                            stroke='#8884d8'
                            strokeWidth={2}
                            dot={(props: CustomDotProps) => {
                                // Remove non-SVG props before spreading
                                const { key, dataKey, payload, points, ...svgProps } = props;
                                return (
                                    <circle
                                        key={key}
                                        {...svgProps}
                                        strokeWidth={2}
                                        r={5}
                                        fill={locationColors[payload.location] || '#000'}
                                    />
                                );
                            }}
                        />
                        <ReferenceLine
                            x={aauAndHighSchoolOverlap}
                            stroke='#9C27B0'
                            strokeDasharray='3 3'
                            label={{
                                value: 'AAU and High School Practices 4x/wk start',
                                position: 'top',
                                dy: 0,
                                style: { fill: '#9C27B0' },
                            }}
                        />
                        <ReferenceLine
                            x={switchTime}
                            stroke='#FF9800'
                            strokeDasharray='3 3'
                            label={{
                                value: 'Switching to Counting Makes Only',
                                position: 'insideTopRight',
                                dy: 0,
                                style: { fill: '#FF9800' },
                            }}
                        />
                        <ReferenceLine
                            x={mentalBreakdownTime}
                            stroke='#F44336'
                            strokeDasharray='3 3'
                            label={{
                                value: 'Major Mental Breakdown',
                                position: 'insideTopRight',
                                dy: 0,
                                style: { fill: '#F44336' },
                            }}
                        />
                        <ReferenceLine
                            x={firstTournamentTime}
                            stroke='#4CAF50'
                            strokeDasharray='3 3'
                            label={{
                                value: '1st Time Getting Recognition',
                                position: 'insideTopLeft',
                                dy: 20,
                                style: { fill: '#4CAF50' },
                            }}
                        />
                        <ReferenceLine
                            y={averageShots}
                            stroke='#2196F3'
                            strokeDasharray='6 2'
                            label={{
                                value: `Average (${averageShots}/day)`,
                                position: 'right',
                                style: { fill: '#2196F3', fontWeight: 500 },
                                dy: -40,
                                dx: -140,
                            }}
                        />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default function ShotsDashboard() {
    return (
        <div className='p-4'>
            <ChartSection title='Full Timeline' filterFn={() => true} />
        </div>
    );
}
