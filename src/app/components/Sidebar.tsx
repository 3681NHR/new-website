'use client';

import React from 'react';

interface SidebarButtonPropsType {
  title: string;
  linkingId: string;
}

interface SidebarPropsType {
  items: SidebarButtonPropsType[];
}

export default function Sidebar({ items }: SidebarPropsType) {
  return (
    <div className="bg-light-background inline-flex flex-col p-3 items-center gap-2.5 box-section-shadow rounded-2xl">
      {items.map(item => (
        <SidebarButton
          key={item.title}
          title={item.title}
          linkingId={item.linkingId}
        />
      ))}
    </div>
  );
}

function SidebarButton({ title, linkingId }: SidebarButtonPropsType) {
  return (
    <button className="inline-flex w-44 h-10 bg-light-foreground rounded-lg items-center p-2.5">
      <img src="/logo.svg" width={'25px'} height={'25px'}></img>
      <h2>
        {title} {linkingId}
      </h2>
    </button>
  );
}
