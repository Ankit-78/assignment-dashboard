import type { DashboardData } from '../types/dashboard';

export const initialDashboardData: DashboardData = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'cspm-1',
          name: 'Cloud Accounts',
          text: 'Connected (2), Not Connected (2)',
          type: 'chart'
        },
        {
          id: 'cspm-2', 
          name: 'Cloud Account Risk Assessment',
          text: 'Failed (1689), Warning (681), Not available (36), Passed (7253)',
          type: 'chart'
        }
      ]
    },
    {
      id: 'cwpp',
      name: 'CWPP Dashboard', 
      widgets: [
        {
          id: 'cwpp-1',
          name: 'Top 5 Namespace Specific Alerts',
          text: 'No Graph data available!',
          type: 'list'
        },
        {
          id: 'cwpp-2',
          name: 'Workload Alerts',
          text: 'No Graph data available!', 
          type: 'chart'
        }
      ]
    },
    {
      id: 'registry',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'registry-1',
          name: 'Image Risk Assessment',
          text: '1470 Total Vulnerabilities',
          type: 'progress'
        },
        {
          id: 'registry-2',
          name: 'Image Security Issues',
          text: '2 Total Images',
          type: 'progress'
        }
      ]
    }
  ]
};

export const availableWidgets = [
  { id: 'w1', name: 'Cloud Accounts', text: 'Monitor cloud account connections', type: 'chart' as const, category: 'CSPM' },
  { id: 'w2', name: 'Cloud Account Risk Assessment', text: 'Assess security risks across cloud accounts', type: 'chart' as const, category: 'CSPM' },
  { id: 'w3', name: 'Top 5 Namespace Specific Alerts', text: 'View critical namespace alerts', type: 'list' as const, category: 'CWPP' },
  { id: 'w4', name: 'Workload Alerts', text: 'Monitor workload security alerts', type: 'chart' as const, category: 'CWPP' },
  { id: 'w5', name: 'Image Risk Assessment', text: 'Scan container images for vulnerabilities', type: 'progress' as const, category: 'Image' },
  { id: 'w6', name: 'Image Security Issues', text: 'Track image security problems', type: 'progress' as const, category: 'Image' },
  { id: 'w7', name: 'Ticket Status', text: 'Monitor support ticket status', type: 'metric' as const, category: 'Ticket' },
  { id: 'w8', name: 'Open Tickets', text: 'View all open support tickets', type: 'list' as const, category: 'Ticket' }
];