import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterDestinations,
  sortDestinations,
  filterBlogs,
  calculateCollectionStats,
  type TrekItem,
  type BlogItem,
} from './trailFilter.ts';

const mockTreks: TrekItem[] = [
  {
    id: 'kalsubai',
    name: 'Kalsubai Peak',
    district: 'Ahmednagar',
    difficulty: 'Moderate',
    duration: '1 Day',
    durationHours: 6,
    category: 'Mountain Peaks',
    elevationMeters: 1646,
    bestSeason: 'Monsoon (Jul-Sep), Winter (Oct-Feb)',
    isFeatured: true,
  },
  {
    id: 'harihar',
    name: 'Harihar Fort',
    district: 'Nashik',
    difficulty: 'Challenging',
    duration: '4-5 Hours',
    durationHours: 4.5,
    category: 'Historic Forts',
    elevationMeters: 1120,
    bestSeason: 'Monsoon (Jul-Sep)',
    isFeatured: true,
  },
  {
    id: 'andharban',
    name: 'Andharban Dark Forest Trek',
    district: 'Pune / Tamhini',
    difficulty: 'Easy',
    duration: '5-6 Hours',
    durationHours: 5.5,
    category: 'Forest Trails',
    elevationMeters: 650,
    bestSeason: 'Monsoon (Jul-Sep)',
    isFeatured: false,
  },
  {
    id: 'amk',
    name: 'Alang Madan Kulang (AMK)',
    district: 'Nashik / Igatpuri',
    difficulty: 'Difficult',
    duration: '3 Days',
    durationHours: 24,
    category: 'Mountain Peaks',
    elevationMeters: 1479,
    bestSeason: 'Winter (Nov-Feb)',
    isFeatured: false,
  },
];

const mockBlogs: BlogItem[] = [
  {
    id: 'monsoon-awakening',
    title: 'The Monsoon Awakening: When the Western Ghats Turn Emerald',
    category: 'Season Guide',
    summary: 'A seasonal reflection on Sahyadri transformation.',
    readTime: '6 min',
  },
  {
    id: 'harihar-steps',
    title: 'Conquering Harihar: A Guide to the 80-Degree Rock-Cut Steps',
    category: 'Trail Guide',
    summary: 'Everything you need to know before attempting the sheer rock stairs.',
    readTime: '8 min',
  },
];

test('filterDestinations filters by category correctly', () => {
  const result = filterDestinations(mockTreks, { category: 'Historic Forts' });
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'harihar');
});

test('filterDestinations filters by difficulty correctly', () => {
  const result = filterDestinations(mockTreks, { difficulty: 'Easy' });
  assert.equal(result.length, 1);
  assert.equal(result[0].name, 'Andharban Dark Forest Trek');
});

test('filterDestinations searches by query in name and district', () => {
  const resultName = filterDestinations(mockTreks, { searchQuery: 'Kalsubai' });
  assert.equal(resultName.length, 1);
  assert.equal(resultName[0].id, 'kalsubai');

  const resultDistrict = filterDestinations(mockTreks, { searchQuery: 'Nashik' });
  assert.equal(resultDistrict.length, 2);
});

test('sortDestinations orders by elevation correctly', () => {
  const sortedDesc = sortDestinations(mockTreks, 'elevation-desc');
  assert.equal(sortedDesc[0].id, 'kalsubai');
  assert.equal(sortedDesc[sortedDesc.length - 1].id, 'andharban');

  const sortedAsc = sortDestinations(mockTreks, 'elevation-asc');
  assert.equal(sortedAsc[0].id, 'andharban');
});

test('filterBlogs filters by query and category', () => {
  const byCat = filterBlogs(mockBlogs, undefined, 'Trail Guide');
  assert.equal(byCat.length, 1);
  assert.equal(byCat[0].id, 'harihar-steps');

  const bySearch = filterBlogs(mockBlogs, 'Emerald');
  assert.equal(bySearch.length, 1);
  assert.equal(bySearch[0].id, 'monsoon-awakening');
});

test('calculateCollectionStats computes metrics accurately', () => {
  const stats = calculateCollectionStats(mockTreks);
  assert.equal(stats.total, 4);
  assert.equal(stats.highestElevation, 1646);
  assert.equal(stats.byDifficulty['Moderate'], 1);
  assert.equal(stats.byDifficulty['Challenging'], 1);
  assert.equal(stats.byDifficulty['Easy'], 1);
  assert.equal(stats.byDifficulty['Difficult'], 1);
});
