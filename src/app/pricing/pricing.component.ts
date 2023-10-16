import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent {
  @Input() customDisplay = '';

  plans = [
    {
      title: 'FREE',
      price: '0',
      features: [
        {
          name: 'Single User',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: '5GB Storage',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Unlimited Public Projects',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Community Access',
          textStyle: 'Community Access',
          icon: 'bi bi-check',
        },
        {
          name: 'Unlimited Private Projects',
          textStyle: 'text-muted',
          icon: 'bi bi-x',
        },
        {
          name: 'Dedicated Phone Support',
          textStyle: 'text-muted',
          icon: 'bi bi-x',
        },
        {
          name: 'Free Subdomain',
          textStyle: 'text-muted',
          icon: 'bi bi-x',
        },
        {          
          name: 'Monthly Status Reports',
          textStyle: 'text-muted',
          icon: 'bi bi-x',
        },
      ],
    },
    {
      title: 'Plus',
      price: '9',
      features: [
        {
          name: 'Single User',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: '5GB Storage',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Unlimited Public Projects',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Community Access',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Unlimited Private Projects',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Dedicated Phone Support',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Free Subdomain',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Monthly Status Reports',
          textStyle: 'text-muted',
          icon: 'bi bi-x',
        },
      ],
    },
    {
      title: 'Pro',
      price: '49',
      features: [
        {
          name: 'Single User',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: '5GB Storage',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Unlimited Public Projects',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Community Access',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Unlimited Private Projects',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Dedicated Phone Support',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Free Subdomain',
          textStyle: '',
          icon: 'bi bi-check',
        },
        {
          name: 'Monthly Status Reports',
          textStyle: '',
          icon: 'bi bi-check',
        },
      ],
    },
  ];
}
