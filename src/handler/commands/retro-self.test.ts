import { describe, it, expect, vi } from 'vitest';
import { bot } from '../../index';
import retroSelfCommand from './retro-self';

vi.mock('../../index', () => ({
  bot: {
    command: vi.fn(),
  },
}));

describe('retroSelfCommand', () => {
  it('should register the quinonsirisponde command', () => {
    retroSelfCommand();
    expect(bot.command).toHaveBeenCalledWith('quinonsirisponde', expect.any(Function));
  });
});
