// AutoClicUS v5.3.0 - "C'est l'heure du taux de change! — Propulsé par JSLAI"
// Automation assistant for SmartD USD exchange rate operations
// Paste this complete snippet into Chrome DevTools console

(function() {
  'use strict';

  // =============================================================================
  // CONFIG
  // =============================================================================
  const Config = {
    version: '5.3.0',
    emmaAvatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAYABgAAD/4QDYRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABgAAAAAQAAAGAAAAABAAeQAwACAAAAFAAAAKiQBAACAAAAFAAAALySkQACAAAAAzAwAACSkgACAAAAAzAwAACgAQADAAAAAQABAACgAgAEAAAAAQAAAHigAwAEAAAAAQAAAHgAAAAAMjAyNToxMDowOCAxODozNjoyMwAyMDI1OjEwOjA4IDE4OjM2OjIzAP/tADhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAADhCSU0EJQAAAAAAENQdjNmPALIE6YAJmOz4Qn7/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAEBAQEBAQGBAQGCQYGBgkMCQkJCQwPDAwMDAwPEg8PDw8PDxISEhISEhISFRUVFRUVGRkZGRkcHBwcHBwcHBwc/9sAQwEEBQUHBwcMBwcMHRQQFB0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0d/90ABAAI/9oADAMBAAIRAxEAPwD6/wDFvjnw94Ihs5vEEkqf2hN9nt1hheZ3k2l8BYwT0BNaHh/xJpnibTRqum+ckBZl/wBJieB8qcH5JAGxnocc15V8avC2u+Jf+EXm0bT7nUU0zUzcXMdncpaTiLyXTKSu6YO4joc1xOq/DzX/ABKukxTaHewWdjpurRGHUb9LqX7RMFNuWkEh3ZbJXJOzAzjigD6myMkZGQcHnoaQMpxgg55GD1r401D4beJtB0OeVrF47STRNGOohbhSZb23uBJek/Pkv5eRuHDDgE1q6P8ADXXtN1mDX9D00RLH4ju7m2JnAC6VNbuIkxvJWMuwygGQTnFAH1bcTukTm1QTSrwF3ADPoT2rzrUj8TbwstoLKyjPTynLP/306EfoK8s+Dfg3xf4d8U3Wq63pjaZaXelJDJGHgMYu0m3NtWJ3ZgVJxI5LnvjpX0qKBNHyxrF94hj1CWx1S+nkkiO1lMrFc+w4H6Va0yzM7Ddzml8TIW8UX+f+ev8AQV1nh+2XKnFJGLPMviRYeItM+wXWkapPZROkhKQuyEMnO7KkHnpX094eeeHSLON55LhvJQl5mLuxIGSWPJrxr4sIFsbQAdIpa9o0biwtR/0xT+QrTojNPU5ZvidptlrFxpOrwPAIpxCsyfOpLEAZHUcn3r05SrAMpyDXyJ4tGfFNyPXUIR/4+lfU8TsgG09hTkl0NITfU1KM1EkokHoafWZuKBTsU0GnZoA//9D7qoJCjJpTXnmrfEvwLpepHSNQ1y0t7pG2tG0gyp9G7L+OKYmy546cyeEdY/69Jf8A0E1d0yeG28PWl1cOI4orVHd2OAqqgJJPYAVj+Jryz1LwZq1xp88dzE9pLh4mDqfkPcZFeI/HLxg2gfCHT9Ptn2XGuRxW+QcEQqgaU/jwp9mNDIW55R8Q/wBpLXdR1KbTvB8v9n6dGxRZwAZpQP4snO0HsAM479qr+CviP8VE3XNlLd3yzLuBnUyx8c5+boD7GvnPw/pseqarEt5uW3zukwCSVH8Ixnk19teHNe0Wz0sXKP5dvbgKw2MCmOAChG79K4a1VxklE9KjSUotyIdN8RL4tmbWTH5M0zfvYv7jgAEc+9et6AmMV4lJcadB8RLd9LcfZtas2lZFBAEsZHzYPQsDzXueifLjNdFNtxuzz60VGdkcx8Wf+PW1H/TGSvY9JOLK3HpEn8hXjvxVZZLW1ZCGHkv0Oa9h0k/6JB/1yT+VdHRHKviPmzxQN3iub31GH/0YlfUMZz+AFfMXiQE+LX99Sh/9GLX0zH1bmqkEDD8W3U1p4X1O5t3McscLFHU4Kt2IPrmq/gbxhH4jtPst4yrqMC/OOnmL/fUfzHaofHLbfCGqH/pmB+bAV876Vd3Fl4n0OW2cxub1FJHGVIOQfYjrRa6LUrM+zKTNIrLIu5DkH0orI6T/0ftHxPdXll4e1C50/Au0t5PJz08zadv61+VPh3wtqOuxLrM8glD3XlzBj85JYbmP1JNfffxx+J1j4E02GxU+ZqN4jtDEMcY4Dtn+EE/jXzb4O0U+MfD8d14aZLW9t7gC7ib7qE5O8Y52N1HoeKzqqfL7hrRcE25n0F4XstD8PfD/AFyKztRaxCORpFB++THgHqevSvh34peI9R1abTrS8uWnis4T5UbdEycYA9OB9a+tNcDad4HutCEsc2rzEJcCIn7nbr0wK+MvH8KLe2/7wSyLCqOVOQNvH51hHmU4qXY191wlKO9zsfhxpWjXNiH1VfMWRjk5xnH+Fey+HtMsNTbVLOaB3RmV40GRlY8gc4x0JIHY4rwb4b6lNb6fLZzweZbFyofGdu4cj+tfRvhuXSNK0ee61G4his4kLPK3DhR2z1z+tefNS9o4s9SDg6SkkcvrL2OmeMfCNtpQxuaTzOcnHCc16J8TrO+k0iwaz1KbTk88rKYsgOpHRiMHr05r5w1DxfNq/iGfxvp0YiTTsR20bjOBnhmHqc5P4DtX0f4g1hLv4V2et6vKqXE8cMoGAA8j/wAIHvnivRhGXs2lueTUcfbJtaHiuk6d4k0rVZrWdnlsAGAZ3yGVhncAT19a+1dC1y4nhWNoQqpGuDzzxXyP4o8UT+HvC8E17Cg1C+m2QIedsSD52P1PAr2L4X+PI/FkUsIJjuIIlLIeMjpke1dVJS5PeOPEcvP7ux57418W2th4qvYZzHHJFdJIobfk9GH3VIA/GtFfjS0G5isMrP8A7cvH/jteKfFSVW8dak8vzhXXK5xnAHB71xVxDc6iILmIby6YboAChbgf8BANbrzMYxunY+gNV+NUN/p9xpVyUjExG4qJWxghv7uO1cm/xC0k3Npdiba1rL5q4ifBIGPb1ryhtPMllEEVVlUkyMT0B5G49sD+dV3MNvHHA8StJGN7sf7zfwkd8Dt61Wj2J7H3d8HPirZeKNSufD8swMrqZoBtK5K/fHJOeCCPxr6Kr8rvh94jHh3xrpOsxqIobSdTJjvG/wAkmT/uMfavt7/hfPhH++fzrOUNTaMrKx//0vMP2pdbN/8AFy5sw3y6baW9vjsCVMx/9GCsf4OeIbnTfFNnYxXLQQ6k6282P4hnKj8+Pxq38cvDvmfFzxHcXdwxaSeNtqqBhTDGVG4k9FwOleQQXZ0m9eDcQyMGVxwRjlSD2Ira2hk9T7OvVms9Z1O5kY7ornEhb+4e5+gr5+8a23hnW9U3aDCsGCxlYP8A61yeoXooHt1qLVPH93e6JcWKRtHLdlRJMX3Fh3HPPPfNcdZBpCPlUntjKn8+ayaOSvUe0Wd34KaTwtrMT3aeZp1yQlxGeQR2b6qefpmvpXxZ4Gh8VeHzp+mELBKyvIy8+WVBKE45KFscjtXznp95DNbfYb8srcFWPXj0PQ19LfCrUH1K0Onebuks4/kIP34DwPrtJx9MVzzgm+bqRg8XNN05PRnysPB3jXSJruytdInZo2MMpUCRCevfg56g/jXWfErxVDN4d8NeBIwVubKOKS7B42SbdojPuMkn8K9lvPEGsReNNV0pVMUNwy7Yz1IjAH5n7w9jXjPjz4d2sEzazYwXbXd7cMgiOcISoIkyQSefU4rWEve5bHdCXtIe0b8jmPiq88muWlnAGeGxtIotwyQGPJJPb8a774MX8el+I7AzPtScPEf+BKev5Zrpbbw+NK8NzaTPdBta1lSslw67hlV5TPYBRgH1rhdctNO8K+HPODbtQiysEqkqd7/KCADyB1rdSS90p03JcxzPja8tdc8TajrWnsHs7iYlHY43KOMgckcjiuWMpEQtYpR5YYkDnnOOvFaFpY39xEI1mjgiUKqq3fA64GasxadfLNHAh+0PMzARKucchVbA9etOFSLlyJ6hUw1SFP2slZGLPFcOZJXmVy3J+Yc/gcVSa3mYb8Fl55AyMjryOM16B4i0S10OKwuYblZpW8xZk2hcGPvhcdzjmuKdplgsgJChl3zOQfmVpG79OqKpH1qo1E9UY8jKVu6xSHJ64HcY5B/LArV+0Qf89B+bf4VJZzM0piknEwTC5boCSc49enWtjybX/npH+Q/+Jq9GZn//0+e/aLs2s/ifdSsMC8toJh7/ACmP/wBkr5wvtJGpatYRCVYPtUqQNI/3V3MAGP0B/SvtT9qzQmH9h+KIl4BezlP1+eP8sN+dfG95GtxbMpBJHzDBwcryMHtXQtYmGzL/AI08Kv4L1KLS2uxerLEsyyKNoIOQMVi2cyjDowyOqk4IrmJb57lt7yO2OAJGLkD0ye1X7WWNsZ61izlqx3PWbBY9UtfsrPh/vL0+8vIrqPhz4tu/DGuwC4G17a4ePB/iDclD7MpO33FeW6MV8wyh9hTGMcHNduLJb/fczMDK6jcy8E7Put/vD1FQ9Dype5I+mPina21tqumeLLaJJ7eba2HGUcFcjI/3Tn6gVYvZPF2qaXC2mwQS2V2gMbQAltuMjq3HTGD9K4nT/EH/AAk3wmubK9cNd+H7lFZj1KNnH4HP9K5L4d/ELUJLM+HzftZJbqTbNgZznO08E4POKFc9CjUUZvs9T2e8nXwX8PrmbXy4umHzSuoUM7nCqvJOQor4x1rUrvX9Strm7/dwOTJEh7RR8A/8Cb+Ve+eKNTOpae1j4m1RL9EkBMDF2dTjqAq8HHtisnQfBVjq9z/wkcEvnW8CiCOJgODHz8yjpjII9evSlUqqmnJnq0XGpJU09TH8FfDS91+0Opaqfsdoztwo/fH02jsD6msnxLrVpoM134f8O2raXMhFvPNK5a5dP4gXzhQc87evrivpDRY5YX8oFm81SmAzLyRxyvI57jmvnPxd4C8YzeIb69GjYS4lLIITtG3op2tg5bGT7mubD1nOTlM7a9NRSjA85vIkMBW3Z5J5SsMYL7s7zgCqV/c5uJ44OYARGhx/BGAiHPqVAzXrPh74d63eeKNH0vXdLvNMtFcyTzzIUXKoSmxjkElsYrhPEugaBpmv32gadPctcw3xt4920p5YbBYkck9eOK9KLPKs+5k6PlrhETl3lUAAZPQ9K73+z9T/AOeUn/fsV6B4Q+Bmrx+LNJmTVEmtLe7iluInR0fbGQ7Lj5hllGOT0NfZf/CB6B/z7j86UpK44wTR/9T6s+JfhGPxx4M1LQMDz5I/Mt2P8M0fzIfzGK/KoyvEzQygo8bFWU9QQcEfga/Y/Nfnn+0v8Nn8Ma9/wmukRY0vV3/fhRxDcnk/RZOo98itIPoZyXU+TrqHybpwuNkh3CmqxU7k6Cpp7qe4QWi4EQcPnAzuwR164wenSp47f5cUmc82rl6zvFBBNd5pOpxiYSEExoPXHNeWSI0LZWtC2v5I12A4zSauctSkpI9Yg1K7s49St9PkVbXWI0BRjgq0R4z7HNc7a6KYVlnvbhi65C7OBnufesyxvTKk0ch5IIQn3wDWmk7z4t0DPGpCgjnJ9KRyuM72RoWmYbKJGwC2W4GM89TXe+EvFd14cj1F7Py5HlgHlxynCGRWG305wWA+tS6D8MvEOvhZrh0soegyC749lXOPoSK9s8PfB3QdPPmXkMmpuVKkXCqIjkY/1fPPpljg9Kh8r0Z0UcPUjNTvYz/BfxOntPMOp6XFJLI3WN1JQY6bhuXnrxXrUvxD0D7Msi21w0rEZjU4wO5GGwcfhXnd78DvDk8ouNLmuNHn7eTJvQf8BfJH4MK5TU/hz8StEdl8P3tvrUBAKmU+TMp75DEqfruPHYdKuLjsek0+56teeM9HuVMUMyR5HKTFh+BZ/lP4E18eSeGdWufiDJeyqjRy3zTZHQqzluMcdDXv9p8PfGOoxRtqkttYkD5toMjgnrgD5f1rvfCHgPw3ZyPa+XHqV40n72WRV3dBxtH8P1zVOcY7sUYt7Hrfhu1sJm/tO3hWN0XycpgAkYzkLgEjGORkdK6/NVbS0t7C2S0tI1iijGAqjAH4CrNQbJWR/9X7irJ13Q9L8S6RdaFrVutzZXiFJI29D0I9GB5BHIPNa1BoA/KP4pfCPWfhjrxgmDXOkXLk2d5jhh18t+wkUdR36juBwKxDHHFfsFr2g6R4n0m40TXLZbqzuV2ujfoynsw6gjkGvgD4ofAHXPA7S6toCyapogy29BmaAekijqB/eHHrg0ziq03uj52mti461QdNgx3q89wwOEYOPTHNQeU7fvH49qZirrc1/C0NpqOuw6dqU628M6uBIQcB8ZHAr6o+HWjeGfEFkfDWuIiXluxWJ4/lSYDow4Hz4/Ej3r4suLh7S5guIzhonDD8DXpmlfEiygmjldJYHUgllwcEdxg5yKUldHZBdT7IfQfF/gz5fD1093poO9oGwZQR02MeD9D19RXo3hnxjpmvxfZ5D9nvo+JIXGxvrtPI/l6E1x/w8+IFp4ssIoLiZWu9uUcdJl9f94dxXZX2g6PqEqzXdsPOjOVlQtHIv0dCGH4GudU9bpnQ53VmdM8aKCzHj1PA/OsW51/RLOJ5pr6ErH97a28j67c4/GuS8U+Ek1vS3tNOna0uchlnYtJJx23sSwB+tfPZ/Z/8X+Ir+aXVr6V44xhMPvyB1JZmJH5fhWijrZk20uj29/iHp+qalHpnh4PqF7cbf9HieNmAH3gF3gqRnJZsDjBr0HwvqcBuJLgWyxallIrqOZdkkC5cHouW3bdwPTGMcEZ8r+Hnwy0jwdNPZ6dKtpqszBo7y4dlkljCjdFG4TAXfnfja5wB6EeiTLc32ow2891b3MtrHPE9yitIheSdJEjG4qSyoCMBmwACc1dkCPZQQwDKcgjINGKbaxrHbRou0gKMFeh9xU+KBn//1vuPFJTqbQAmKcDSUUAeO+N/gd4F8Z+fdfZv7L1GYc3VoAjN3+dcbWz34zXy14n/AGYPHmmF30GW31mEfdCsIJf++ZDt/wDH6/Qen0XM5U4y1Z+OHif4aePtHkA1Pw9fwqmcv5DtH/32oKn8688ktZYHMcyMjjqrAg/ka/XD4v8A/IuN/vH+Rr8sPEn/ACGJv941ogWisdj8OrjxVZ30cGmade3dvI4P+jQySNG/Z12KfxFfo74Ph8Uatpq/25p8lncR4XfLhBIP7237wPrkV8w/s9f8f0H+8K+/U6VDVmWjnrbw9ChDXL+Yf7o4H+Nb8cccSCONQqjsKfRSGZF/odjqMbxzLkOQxB5XI74PAJ9RVG68H6Nd21rayK6x2XzQBG27HChA4A7gZ/M104pRQAqKERY1GFQBR9BTqQUtAH//2Q==',
    theme: {
      bg: '#ffffff',
      bgSecondary: '#f7f9f8',
      primary: '#00874e',
      primaryLight: '#00a65a',
      text: '#1a1a1a',
      textSecondary: '#6c757d',
      border: '#e0e0e0',
      error: '#dc3545',
      warning: '#ffc107',
      success: '#00874e',
      shadow: 'rgba(0, 0, 0, 0.1)'
    },
    limits: {
      maxActions: 1000,
      maxConditions: 50,
      maxLoops: 9999,
      maxAuditSize: 5 * 1024 * 1024, // 5MB
      speedMin: 0.25,
      speedMax: 8
    },
    rateValidation: {
      min: 1.0,
      max: 2.0
    },
    storage: {
      actions: 'autoclicus_actions_v4',
      conditions: 'autoclicus_conditions_v4',
      config: 'autoclicus_config_v4',
      audit: 'autoclicus_audit_v4',
      scenario: 'autoclicus_scenario_v1',
      dirHandle: 'autoclicus_dir_handle_v1'
    },
    // Emma Vibe Themes
    vibeThemes: {
      neutre: {
        name: 'Neutre',
        emoji: '🟢',
        headerBg: 'linear-gradient(135deg, #00874e 0%, #005a34 40%, #00a65a 100%)',
        primary: '#00874e',
        primaryLight: '#00a65a',
        accent: '#4ade80',
        bg: '#ffffff',
        bgSecondary: '#f7f9f8',
        border: '#e0e0e0',
        borderGlow: 'rgba(0, 135, 78, 0.2)'
      },
      plage: {
        name: 'Plage',
        emoji: '🏖️',
        headerBg: 'linear-gradient(135deg, #ff6b35 0%, #f7c948 50%, #00b4d8 100%)',
        primary: '#ff6b35',
        primaryLight: '#f7c948',
        accent: '#00b4d8',
        bg: '#fffbf0',
        bgSecondary: '#fff5e6',
        border: '#ffd4a8',
        borderGlow: 'rgba(255, 107, 53, 0.3)'
      },
      ski: {
        name: 'Ski',
        emoji: '⛷️',
        headerBg: 'linear-gradient(135deg, #1e3a5f 0%, #4a90d9 50%, #b8d4f0 100%)',
        primary: '#1e3a5f',
        primaryLight: '#4a90d9',
        accent: '#00d4ff',
        bg: '#f0f6ff',
        bgSecondary: '#e6effa',
        border: '#b8d4f0',
        borderGlow: 'rgba(74, 144, 217, 0.3)'
      }
    }
  };

  // =============================================================================
  // STORAGE — Safe localStorage wrapper (banking sites may block storage)
  // =============================================================================
  const Storage = (() => {
    const memoryFallback = {};
    let useMemory = false;

    // Test localStorage availability once
    try {
      const testKey = '__autoclicus_test__';
      localStorage.setItem(testKey, '1');
      localStorage.removeItem(testKey);
    } catch (e) {
      useMemory = true;
      console.warn('AutoClicUS: localStorage unavailable — using in-memory storage (data lost on page reload)');
    }

    return {
      getItem(key) {
        if (useMemory) return memoryFallback[key] || null;
        try { return localStorage.getItem(key); } catch (e) { return memoryFallback[key] || null; }
      },
      setItem(key, value) {
        if (useMemory) { memoryFallback[key] = value; return; }
        try { localStorage.setItem(key, value); } catch (e) { memoryFallback[key] = value; }
      },
      removeItem(key) {
        if (useMemory) { delete memoryFallback[key]; return; }
        try { localStorage.removeItem(key); } catch (e) { delete memoryFallback[key]; }
      },
      get isMemoryMode() { return useMemory; }
    };
  })();

  // =============================================================================
  // SAFE HTML — Trusted Types compatible innerHTML setter
  // =============================================================================
  const safeHTML = (() => {
    let policy = null;
    try {
      if (window.trustedTypes?.createPolicy) {
        policy = window.trustedTypes.createPolicy('autoclicus', { createHTML: s => s });
      }
    } catch (e) { /* Trusted Types not enforced or already created — fine */ }

    return function(element, html) {
      try {
        element.innerHTML = policy ? policy.createHTML(html) : html;
      } catch (e) {
        // Last resort: use DOMParser
        const doc = new DOMParser().parseFromString(html, 'text/html');
        element.replaceChildren(...doc.body.childNodes);
      }
    };
  })();

  // =============================================================================
  // STATE
  // =============================================================================
  const State = {
    // Recording
    isRecording: false,
    recordedActions: [],

    // Playback
    isPlaying: false,
    isPaused: false,
    currentStep: 0,
    loopCount: 1,
    currentLoop: 0,
    speed: 1,

    // Conditions
    conditions: [],
    preflightPassed: false,

    // Dry run
    dryRun: false,

    // Audit
    sessionId: null,
    auditTrail: [],

    // UI
    shadowRoot: null,
    currentTab: 'record',

    // Timing
    startTime: null,
    totalDuration: 0,
    timeLimit: null,
    deadlineTime: null,

    // Settings (user-configurable)
    settings: {
      shortcuts: { record: 'F6', play: 'F7', stop: 'F8', pause: 'F9' },
      delayBetweenActions: 1000,
      delayBetweenLoops: 2000,
      autoSave: true,
      showTooltips: true,
      confirmBeforeDelete: true
    },

    // Rates
    tauxAcheteur: '',
    tauxVendeur: '',

    // Countdown (default 16:00 today)
    countdownEnd: (() => { const t = new Date(); t.setHours(16, 0, 0, 0); return t.getTime() > Date.now() ? t.getTime() : null; })(),
    countdownInterval: null,

    // Loop execution stats
    loopTimestamps: [],
    loopStartTime: null,

    // UI state for forms
    showConditionForm: false,
    showPromptForm: false,
    showConfirmForm: false,
    capturingShortcut: null,
    elementPickerActive: false,
    pickedElement: null,
    editingActionIndex: null,

    // Minimized state
    isMinimized: false,

    // Vibe theme & font size
    vibeTheme: 'neutre',  // 'neutre' | 'plage' | 'ski'
    fontSize: 14,         // base font size in px (12-20)

    // Scenario (guided recording)
    scenario: {
      stepActions: {},       // { stepId: [actions] }
      guidedStep: null,      // current step being recorded
      isGuided: false,       // true when in guided recording mode
      rateModel: 'acheteur',   // 'acheteur' or 'vendeur'
      configured: false      // true when all required steps are configured
    }
  };

  // =============================================================================
  // FINGERPRINT - Element identification and resolution
  // =============================================================================
  const Fingerprint = {
    capture(element, eventType) {
      const rect = element.getBoundingClientRect();
      const path = this.getPath(element);

      return {
        selector: this.getSelector(element),
        xpath: this.getXPath(element),
        text: element.textContent?.trim().substring(0, 100) || '',
        tag: element.tagName.toLowerCase(),
        id: element.id || '',
        className: this.cleanClassName(element.className || ''),
        name: element.getAttribute('name') || '',
        type: element.getAttribute('type') || '',
        placeholder: element.getAttribute('placeholder') || '',
        ariaLabel: element.getAttribute('aria-label') || element.closest('[aria-label]')?.getAttribute('aria-label') || '',
        dataAttrs: this.getDataAttrs(element),
        path: path,
        coords: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        index: this.getElementIndex(element),
        eventType: eventType
      };
    },

    cleanClassName(cn) {
      const str = typeof cn === 'string' ? cn : cn?.baseVal || '';
      return str.split(' ').filter(c =>
        c.trim() && !c.match(/^(ng-tns-|ng-star-|ng-trigger-|ng-animating|_ngcontent|_nghost|cdk-focused|cdk-mouse)/)
      ).join(' ');
    },

    getSelector(element) {
      if (element.id) return `#${element.id}`;

      let selector = element.tagName.toLowerCase();
      const classStr = typeof element.className === 'string'
        ? element.className
        : element.className?.baseVal || '';
      if (classStr) {
        // Strip Angular dynamic classes that change every session
        // Keep stable ones: mat-* (Angular Material), cdk-overlay-* (stable positioning)
        const classes = classStr.split(' ').filter(c =>
          c.trim() &&
          !c.match(/^ng-tns-/) &&       // Angular template namespace (changes every compile)
          !c.match(/^ng-star-/) &&       // Angular structural directive marker
          !c.match(/^ng-trigger-/) &&    // Angular animation trigger
          !c.match(/^ng-animating/) &&   // Angular animation state
          !c.match(/^_ngcontent/) &&     // Angular view encapsulation hash
          !c.match(/^_nghost/) &&        // Angular host element hash
          !c.match(/^cdk-focused/) &&    // CDK focus state (dynamic)
          !c.match(/^cdk-mouse/)         // CDK mouse state (dynamic)
        );
        if (classes.length > 0) {
          selector += '.' + classes.join('.');
        }
      }

      if (element.name) selector += `[name="${element.name}"]`;
      if (element.type) selector += `[type="${element.type}"]`;

      return selector;
    },

    getXPath(element) {
      if (element.id) return `//*[@id="${element.id}"]`;

      const parts = [];
      let current = element;

      while (current && current.nodeType === Node.ELEMENT_NODE) {
        let index = 0;
        let sibling = current.previousSibling;

        while (sibling) {
          if (sibling.nodeType === Node.ELEMENT_NODE && sibling.nodeName === current.nodeName) {
            index++;
          }
          sibling = sibling.previousSibling;
        }

        const tagName = current.nodeName.toLowerCase();
        const pathIndex = index > 0 ? `[${index + 1}]` : '';
        parts.unshift(tagName + pathIndex);

        current = current.parentNode;
      }

      return '/' + parts.join('/');
    },

    getDataAttrs(element) {
      const attrs = {};
      for (let attr of element.attributes) {
        if (attr.name.startsWith('data-')) {
          attrs[attr.name] = attr.value;
        }
      }
      return attrs;
    },

    getPath(element) {
      const path = [];
      let current = element;

      while (current && current !== document.body) {
        path.unshift({
          tag: current.tagName.toLowerCase(),
          id: current.id || '',
          className: current.className || ''
        });
        current = current.parentElement;
      }

      return path;
    },

    getElementIndex(element) {
      const parent = element.parentElement;
      if (!parent) return 0;

      const siblings = Array.from(parent.children);
      return siblings.indexOf(element);
    },

    resolve(fingerprint) {
      // ID match is definitive — return immediately
      if (fingerprint.id) {
        const el = document.getElementById(fingerprint.id);
        if (el && this.isVisible(el)) {
          return { element: el, confidence: this.calculateConfidence(el, fingerprint) };
        }
      }

      // Try ALL strategies, pick the best confidence match
      const strategies = [
        () => document.querySelector(fingerprint.selector),
        () => this.evaluateXPath(fingerprint.xpath),
        () => this.findByText(fingerprint.text, fingerprint.tag),
        () => this.findByDataAttrs(fingerprint.dataAttrs),
        () => this.findByPath(fingerprint.path),
        () => this.findByCoords(fingerprint.coords)
      ];

      let best = { element: null, confidence: 0 };

      for (let strategy of strategies) {
        try {
          const element = strategy();
          if (element && this.isVisible(element)) {
            const confidence = this.calculateConfidence(element, fingerprint);
            if (confidence > best.confidence) {
              best = { element, confidence };
            }
            // Perfect match — stop early
            if (confidence >= 85) return best;
          }
        } catch (e) {
          // Strategy failed, try next
        }
      }

      return best;
    },

    evaluateXPath(xpath) {
      const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return result.singleNodeValue;
    },

    findByText(text, tag) {
      if (!text) return null;

      const elements = tag ? document.getElementsByTagName(tag) : document.querySelectorAll('*');
      for (let el of elements) {
        if (el.textContent?.trim().includes(text.substring(0, 50))) {
          return el;
        }
      }
      return null;
    },

    findByDataAttrs(dataAttrs) {
      if (!dataAttrs || Object.keys(dataAttrs).length === 0) return null;

      for (let [key, value] of Object.entries(dataAttrs)) {
        const el = document.querySelector(`[${key}="${value}"]`);
        if (el) return el;
      }
      return null;
    },

    findByPath(path) {
      if (!path || path.length === 0) return null;

      let current = document.body;
      for (let step of path) {
        const children = Array.from(current.children);
        const match = children.find(child => {
          return child.tagName.toLowerCase() === step.tag &&
                 (!step.id || child.id === step.id) &&
                 (!step.className || child.className === step.className);
        });

        if (!match) return null;
        current = match;
      }

      return current;
    },

    findByCoords(coords) {
      const element = document.elementFromPoint(coords.x, coords.y);
      return element;
    },

    isVisible(element) {
      if (!element) return false;

      const style = window.getComputedStyle(element);
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return false;
      }
      // offsetParent is null for fixed/sticky elements, <body>, and <html> — not actually hidden
      if (element.offsetParent === null && style.position !== 'fixed' && style.position !== 'sticky' && element !== document.body && element !== document.documentElement) {
        return false;
      }
      return true;
    },

    calculateConfidence(element, fingerprint) {
      let score = 0;

      // ID match is the strongest signal — 40pts
      if (element.id && element.id === fingerprint.id) score += 40;
      // Class match — 15pts (reduced: generic classes are common)
      if (element.className === fingerprint.className) score += 15;
      // Name attribute — 15pts
      if (element.getAttribute('name') === fingerprint.name) score += 15;
      // Text content match — 25pts (strong differentiator for similar elements)
      if (fingerprint.text && element.textContent?.trim().includes(fingerprint.text.substring(0, 30))) score += 25;
      // Tag match — 5pts (very generic)
      if (element.tagName.toLowerCase() === fingerprint.tag) score += 5;
      // Aria-label match — 15pts (strong for icon buttons / SVGs)
      if (fingerprint.ariaLabel) {
        const elLabel = element.getAttribute('aria-label') || element.closest('[aria-label]')?.getAttribute('aria-label') || '';
        if (elLabel === fingerprint.ariaLabel) score += 15;
      }
      // XPath positional match — 20pts (unique positional identity)
      if (fingerprint.xpath) {
        try {
          const xpathEl = this.evaluateXPath(fingerprint.xpath);
          if (xpathEl === element) score += 20;
        } catch (e) {}
      }

      return Math.min(score, 100);
    }
  };

  // =============================================================================
  // CONDITIONS - Preflight and runtime conditions
  // =============================================================================
  const Conditions = {
    types: [
      'visible', 'hidden', 'hasText', 'notHasText', 'hasColor',
      'hasClass', 'exists', 'urlContains', 'count', 'value',
      'checked', 'enabled'
    ],

    check(condition) {
      try {
        const { type, selector, value } = condition;

        switch (type) {
          case 'visible': {
            const el = document.querySelector(selector);
            return el && Fingerprint.isVisible(el);
          }
          case 'hidden': {
            const el = document.querySelector(selector);
            return !el || !Fingerprint.isVisible(el);
          }
          case 'hasText': {
            const el = document.querySelector(selector);
            return el && el.textContent?.includes(value);
          }
          case 'notHasText': {
            const el = document.querySelector(selector);
            return !el || !el.textContent?.includes(value);
          }
          case 'hasColor': {
            const el = document.querySelector(selector);
            if (!el) return false;
            const style = window.getComputedStyle(el);
            return style.backgroundColor === value || style.color === value;
          }
          case 'hasClass': {
            const el = document.querySelector(selector);
            return el && el.classList.contains(value);
          }
          case 'exists': {
            return document.querySelector(selector) !== null;
          }
          case 'urlContains': {
            return window.location.href.includes(value);
          }
          case 'count': {
            const elements = document.querySelectorAll(selector);
            return elements.length === parseInt(value);
          }
          case 'value': {
            const el = document.querySelector(selector);
            return el && el.value === value;
          }
          case 'checked': {
            const el = document.querySelector(selector);
            return el && el.checked;
          }
          case 'enabled': {
            const el = document.querySelector(selector);
            return el && !el.disabled;
          }
          default:
            return false;
        }
      } catch (e) {
        console.error('Condition check error:', e);
        return false;
      }
    },

    checkAll(conditions, preflight = false) {
      const toCheck = preflight
        ? conditions.filter(c => c.preflight)
        : conditions.filter(c => !c.preflight);

      const results = toCheck.map(condition => ({
        condition,
        passed: this.check(condition)
      }));

      return {
        allPassed: results.every(r => r.passed),
        results
      };
    },

    async runPreflight(conditions) {
      const { allPassed, results } = this.checkAll(conditions, true);

      if (!allPassed) {
        const failed = results.filter(r => !r.passed);
        UI.showPreflightResults(results);
        throw new Error(`Preflight failed: ${failed.map(f => f.condition.name).join(', ')}`);
      }

      State.preflightPassed = true;
      return true;
    }
  };

  // =============================================================================
  // AUDIT - Structured audit trail
  // =============================================================================
  const Audit = {
    log(action, target, value, result, duration) {
      const entry = {
        id: this.generateId(),
        sessionId: State.sessionId,
        timestamp: new Date().toISOString(),
        sequence: State.currentStep + 1,
        type: action.type,
        action: action.eventType || action.type,
        target: this.sanitizeTarget(target),
        value: this.sanitizeValue(value),
        result: result,
        duration_ms: duration,
        context: {
          url: window.location.href,
          loop: State.currentLoop,
          dryRun: State.dryRun
        }
      };

      State.auditTrail.push(entry);
      // P3: Debounced save — batch at loop boundaries instead of every action
      if (!this._saveScheduled) {
        this._saveScheduled = true;
        setTimeout(() => {
          this.save();
          this.pruneIfNeeded();
          this._saveScheduled = false;
        }, 2000);
      }

      return entry;
    },

    generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
    },

    sanitizeTarget(target) {
      if (typeof target === 'string') {
        // Remove potential account numbers or sensitive data
        return target.replace(/\d{10,}/g, '***');
      }
      return target?.selector || target?.xpath || 'unknown';
    },

    sanitizeValue(value) {
      if (typeof value !== 'string') return value;

      // Sanitize potential sensitive data
      return value.replace(/\d{10,}/g, '***');
    },

    save() {
      try {
        const data = {
          version: Config.version,
          sessions: this.groupBySessions()
        };
        Storage.setItem(Config.storage.audit, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to save audit trail:', e);
      }
    },

    load() {
      try {
        const data = Storage.getItem(Config.storage.audit);
        if (data) {
          const parsed = JSON.parse(data);
          return parsed.sessions || [];
        }
      } catch (e) {
        console.error('Failed to load audit trail:', e);
      }
      return [];
    },

    groupBySessions() {
      const sessions = {};

      for (let entry of State.auditTrail) {
        if (!sessions[entry.sessionId]) {
          sessions[entry.sessionId] = [];
        }
        sessions[entry.sessionId].push(entry);
      }

      return Object.entries(sessions).map(([id, entries]) => ({
        sessionId: id,
        startTime: entries[0]?.timestamp,
        endTime: entries[entries.length - 1]?.timestamp,
        entries: entries
      }));
    },

    exportJSON() {
      const sessions = this.load();
      const blob = new Blob([JSON.stringify(sessions, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `autoclicus-audit-${new Date().toISOString()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    },

    exportCSV() {
      const sessions = this.load();
      const rows = [['Session ID', 'Timestamp', 'Sequence', 'Type', 'Action', 'Target', 'Value', 'Result', 'Duration (ms)', 'URL', 'Loop']];

      for (let session of sessions) {
        for (let entry of session.entries) {
          rows.push([
            entry.sessionId,
            entry.timestamp,
            entry.sequence,
            entry.type,
            entry.action,
            entry.target,
            entry.value || '',
            entry.result,
            entry.duration_ms,
            entry.context.url,
            entry.context.loop
          ]);
        }
      }

      const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `autoclicus-audit-${new Date().toISOString()}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    },

    clear() {
      State.auditTrail = [];
      Storage.removeItem(Config.storage.audit);
    },

    pruneIfNeeded() {
      try {
        const data = Storage.getItem(Config.storage.audit);
        if (data && data.length > Config.limits.maxAuditSize) {
          const parsed = JSON.parse(data);
          // Keep only last 50% of sessions
          parsed.sessions = parsed.sessions.slice(-Math.floor(parsed.sessions.length / 2));
          Storage.setItem(Config.storage.audit, JSON.stringify(parsed));
        }
      } catch (e) {
        console.error('Failed to prune audit trail:', e);
      }
    },

    getTrail() {
      return State.auditTrail;
    }
  };

  // =============================================================================
  // FILE MANAGER — Local directory browser for .json scenario files
  // =============================================================================
  const FileManager = {
    dirHandle: null,
    files: [],
    dbName: 'autoclicus_fs',
    storeName: 'handles',

    async openDB() {
      return new Promise((resolve, reject) => {
        const req = indexedDB.open(this.dbName, 1);
        req.onupgradeneeded = () => req.result.createObjectStore(this.storeName);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    },

    async saveDirHandle(handle) {
      try {
        const db = await this.openDB();
        const tx = db.transaction(this.storeName, 'readwrite');
        tx.objectStore(this.storeName).put(handle, 'dir');
        await new Promise((r, f) => { tx.oncomplete = r; tx.onerror = f; });
        db.close();
      } catch (e) { /* IndexedDB unavailable */ }
    },

    async loadDirHandle() {
      try {
        const db = await this.openDB();
        const tx = db.transaction(this.storeName, 'readonly');
        const handle = await new Promise((r, f) => {
          const req = tx.objectStore(this.storeName).get('dir');
          req.onsuccess = () => r(req.result);
          req.onerror = () => f(req.error);
        });
        db.close();
        return handle || null;
      } catch (e) { return null; }
    },

    async pickDirectory() {
      if (!window.showDirectoryPicker) return false;
      try {
        this.dirHandle = await window.showDirectoryPicker({ mode: 'read' });
        await this.saveDirHandle(this.dirHandle);
        await this.listFiles();
        return true;
      } catch (e) { return false; }
    },

    async restoreDirectory() {
      try {
        const handle = await this.loadDirHandle();
        if (!handle) return false;
        const perm = await handle.queryPermission({ mode: 'read' });
        if (perm === 'granted') {
          this.dirHandle = handle;
          await this.listFiles();
          return true;
        }
        // Need to re-request (requires user gesture)
        this.dirHandle = handle;
        return 'needs_permission';
      } catch (e) { return false; }
    },

    async requestPermission() {
      if (!this.dirHandle) return false;
      try {
        const perm = await this.dirHandle.requestPermission({ mode: 'read' });
        if (perm === 'granted') {
          await this.listFiles();
          return true;
        }
        return false;
      } catch (e) { return false; }
    },

    async listFiles() {
      if (!this.dirHandle) return;
      this.files = [];
      try {
        for await (const entry of this.dirHandle.values()) {
          if (entry.kind === 'file' && entry.name.endsWith('.json')) {
            const file = await entry.getFile();
            this.files.push({
              name: entry.name,
              size: file.size,
              lastModified: file.lastModified,
              handle: entry
            });
          }
        }
        this.files.sort((a, b) => b.lastModified - a.lastModified);
      } catch (e) { this.files = []; }
    },

    async loadFile(fileInfo) {
      try {
        const file = await fileInfo.handle.getFile();
        const text = await file.text();
        return JSON.parse(text);
      } catch (e) { return null; }
    },

    async saveToDirectory(filename, data) {
      if (!this.dirHandle) return false;
      try {
        const perm = await this.dirHandle.queryPermission({ mode: 'readwrite' });
        if (perm !== 'granted') {
          await this.dirHandle.requestPermission({ mode: 'readwrite' });
        }
        const fileHandle = await this.dirHandle.getFileHandle(filename, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(JSON.stringify(data, null, 2));
        await writable.close();
        await this.listFiles();
        return true;
      } catch (e) { return false; }
    },

    formatSize(bytes) {
      if (bytes < 1024) return bytes + ' o';
      return (bytes / 1024).toFixed(1) + ' Ko';
    },

    formatDate(ts) {
      const d = new Date(ts);
      return d.toLocaleDateString('fr-CA') + ' ' + d.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' });
    }
  };

  // =============================================================================
  // SCENARIO — Pre-built guided workflows
  // =============================================================================
  const Scenario = {
    defaultWorkflow: {
      id: 'taux-usd-fin-journee',
      name: 'Taux USD — Fin de journée',
      description: 'Scénario guidé pour saisir le taux de change USD dans SmartD. Configurez chaque étape une fois, puis lancez le scénario.',
      steps: [
        // Setup steps (run ONCE)
        { id: 'filtres-us', name: 'Filtrer bourses US', type: 'setup', recordRequired: true, instruction: 'Cliquez sur le filtre US dans SmartD.' },
        { id: 'filtres-tsx-off', name: 'Retirer filtre TSX', type: 'setup', recordRequired: true, instruction: 'Cliquez pour décocher le filtre TSX.' },
        { id: 'filtres-pro-off', name: 'Exclure comptes pro', type: 'setup', recordRequired: true, instruction: 'Cliquez pour exclure les comptes professionnels.' },
        { id: 'saisie-taux', name: 'Taux du jour', type: 'rate_input', recordRequired: false, auto: true, instruction: 'Le taux est pris de la barre de taux ci-dessus.' },
        { id: 'choix-modele', name: '1 taux ou 2 taux', type: 'ui_toggle', recordRequired: false, auto: true, instruction: 'Choix fait via le toggle dans cet onglet.' },
        // Loop marker
        { id: 'loop-start', name: 'Début boucle', type: 'marker', recordRequired: false, auto: true, instruction: 'Les étapes suivantes sont répétées pour chaque transaction.' },
        // Loop steps (repeat × BOUCLES)
        { id: 'clic-ligne', name: 'Cliquer ligne transaction', type: 'loop', recordRequired: true, instruction: 'Cliquez sur une ligne de transaction pour ouvrir le modal.' },
        { id: 'attente-modal', name: 'Attente ouverture modal', type: 'wait', recordRequired: false, auto: true, delay: 1000, instruction: 'Attente automatique (1000ms).' },
        { id: 'clic-champ-taux', name: 'Cliquer champ taux dans modal', type: 'loop', recordRequired: true, instruction: 'Cliquez sur le champ de saisie du taux dans le modal.' },
        { id: 'coller-taux', name: 'Coller taux', type: 'paste_rate', recordRequired: false, auto: true, instruction: 'Le taux acheteur est collé automatiquement.' },
        { id: 'soumettre', name: 'Soumettre', type: 'loop', recordRequired: true, instruction: 'Cliquez sur le bouton Soumettre dans le modal.' },
        { id: 'attente-fermeture', name: 'Attente fermeture modal', type: 'wait', recordRequired: false, auto: true, delay: 1500, instruction: 'Attente automatique (1500ms).' },
        { id: 'detect-erreur', name: 'Détecter erreur (barre rouge)', type: 'condition', recordRequired: false, optional: true, instruction: 'Optionnel: cliquez sur l\'indicateur d\'erreur (barre rouge) pour le détecter automatiquement.' },
        { id: 'clic-retour', name: 'Bouton Retour (si erreur)', type: 'error_recovery', recordRequired: false, optional: true, instruction: 'Optionnel: cliquez sur le bouton Retour utilisé en cas d\'erreur.' }
      ]
    },

    getStepStatus(stepId) {
      const step = this.defaultWorkflow.steps.find(s => s.id === stepId);
      if (!step) return 'unconfigured';
      if (step.auto) return 'auto';
      if (step.optional && !State.scenario.stepActions[stepId]) return 'optional';
      if (State.scenario.stepActions[stepId]?.length > 0) return 'configured';
      return 'unconfigured';
    },

    isAllRequiredConfigured() {
      return this.defaultWorkflow.steps
        .filter(s => s.recordRequired)
        .every(s => State.scenario.stepActions[s.id]?.length > 0);
    },

    startGuidedRecording(stepId) {
      const step = this.defaultWorkflow.steps.find(s => s.id === stepId);
      if (!step) return;

      State.scenario.isGuided = true;
      State.scenario.guidedStep = stepId;

      // Show overlay instruction outside shadow DOM
      this._showOverlay(step.instruction);

      // Start recorder in guided mode
      if (!State.isRecording) {
        State.isRecording = true;
        document.addEventListener('click', Recorder.onEvent, true);
        document.addEventListener('input', Recorder.onEvent, true);
        document.addEventListener('change', Recorder.onEvent, true);
        document.addEventListener('keydown', Recorder.onEvent, true);
      }
    },

    stopGuidedRecording() {
      State.scenario.isGuided = false;
      const stepId = State.scenario.guidedStep;
      State.scenario.guidedStep = null;

      // Stop recorder
      State.isRecording = false;
      document.removeEventListener('click', Recorder.onEvent, true);
      document.removeEventListener('input', Recorder.onEvent, true);
      document.removeEventListener('change', Recorder.onEvent, true);
      document.removeEventListener('keydown', Recorder.onEvent, true);

      this._removeOverlay();
      this.saveConfig();
      UI.flash('success', `Étape « ${stepId} » configurée`);
      UI.render();
    },

    buildActionSequence() {
      const actions = [];
      const steps = this.defaultWorkflow.steps;

      for (const step of steps) {
        if (step.type === 'marker') {
          // Insert loop_start marker
          actions.push({ id: 'loop_start_marker', type: 'loop_start' });
          continue;
        }

        if (step.type === 'wait') {
          actions.push({
            id: `scenario_wait_${step.id}`,
            type: 'wait',
            delay: step.delay || 1000
          });
          continue;
        }

        if (step.type === 'paste_rate') {
          // Attach fingerprint from clic-champ-taux step for focus guard
          const fieldActions = State.scenario.stepActions['clic-champ-taux'];
          const targetFp = fieldActions?.[0]?.fingerprint || null;
          actions.push({
            id: `scenario_paste_${step.id}`,
            type: State.scenario.rateModel === 'vendeur' ? 'paste_seller_rate' : 'paste_buyer_rate',
            targetFingerprint: targetFp
          });
          continue;
        }

        if (step.type === 'rate_input' || step.type === 'ui_toggle') {
          // These are handled by UI state, not actions
          continue;
        }

        if (step.type === 'condition') {
          // Error detection — only if configured
          const stepActions = State.scenario.stepActions[step.id];
          if (stepActions?.length > 0) {
            actions.push({
              id: `scenario_cond_${step.id}`,
              type: 'condition_check',
              fingerprint: stepActions[0].fingerprint,
              onDetected: 'stop'
            });
          }
          continue;
        }

        if (step.type === 'error_recovery') {
          // Back button — only if configured
          const stepActions = State.scenario.stepActions[step.id];
          if (stepActions?.length > 0) {
            actions.push({
              id: `scenario_recovery_${step.id}`,
              type: 'error_recovery',
              fingerprint: stepActions[0].fingerprint
            });
          }
          continue;
        }

        // User-recorded steps (setup + loop)
        const stepActions = State.scenario.stepActions[step.id];
        if (stepActions?.length > 0) {
          for (const a of stepActions) {
            actions.push({ ...a, scenarioStepId: step.id });
          }
        }
      }

      return actions;
    },

    saveConfig() {
      try {
        Storage.setItem(Config.storage.scenario, JSON.stringify({
          stepActions: State.scenario.stepActions,
          rateModel: State.scenario.rateModel
        }));
      } catch (e) {
        console.warn('Scenario save error:', e);
      }
    },

    loadConfig() {
      try {
        const saved = Storage.getItem(Config.storage.scenario);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.stepActions) State.scenario.stepActions = data.stepActions;
          if (data.rateModel) State.scenario.rateModel = data.rateModel;
          // Recalculate configured flag
          const requiredSteps = this.defaultWorkflow.steps.filter(s => s.recordRequired);
          State.scenario.configured = requiredSteps.every(s => {
            const actions = State.scenario.stepActions[s.id];
            return actions && actions.length > 0;
          });
        }
      } catch (e) {
        console.warn('Scenario load error:', e);
      }
    },

    _showOverlay(instruction) {
      this._removeOverlay();
      const overlay = document.createElement('div');
      overlay.id = 'autoclicus-guided-overlay';
      overlay.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0;
        background: linear-gradient(135deg, #00874e, #00a65a);
        color: white; padding: 14px 24px; z-index: 999999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 15px; font-weight: 600; text-align: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        animation: slideDown 0.3s ease-out;
        pointer-events: none;
      `;
      overlay.textContent = `🎯 ${instruction} — Cliquez sur l'élément dans la page`;

      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Annuler';
      cancelBtn.style.cssText = `
        margin-left: 16px; padding: 6px 16px; background: rgba(255,255,255,0.2);
        color: white; border: 1px solid rgba(255,255,255,0.4); border-radius: 6px;
        cursor: pointer; font-size: 13px; font-weight: 500;
        pointer-events: auto;
      `;
      cancelBtn.addEventListener('click', () => {
        State.scenario.isGuided = false;
        State.scenario.guidedStep = null;
        State.isRecording = false;
        document.removeEventListener('click', Recorder.onEvent, true);
        document.removeEventListener('input', Recorder.onEvent, true);
        document.removeEventListener('change', Recorder.onEvent, true);
        document.removeEventListener('keydown', Recorder.onEvent, true);
        this._removeOverlay();
        UI.render();
      });
      overlay.appendChild(cancelBtn);
      document.body.appendChild(overlay);
    },

    _removeOverlay() {
      const existing = document.getElementById('autoclicus-guided-overlay');
      if (existing) existing.remove();
    }
  };

  // =============================================================================
  // RECORDER - Action recording
  // =============================================================================
  const Recorder = {
    start() {
      if (State.isRecording) return;

      State.isRecording = true;
      State.recordedActions = [];

      // Attach event listeners
      document.addEventListener('click', this.onEvent, true);
      document.addEventListener('input', this.onEvent, true);
      document.addEventListener('change', this.onEvent, true);
      document.addEventListener('keydown', this.onEvent, true);

      UI.flash('success', 'Enregistrement démarré');
      UI.pageBorderFlash('record');
      UI.render();
    },

    stop() {
      if (!State.isRecording) return;

      State.isRecording = false;

      // Remove event listeners
      document.removeEventListener('click', this.onEvent, true);
      document.removeEventListener('input', this.onEvent, true);
      document.removeEventListener('change', this.onEvent, true);
      document.removeEventListener('keydown', this.onEvent, true);

      UI.flash('info', `Enregistrement arrêté - ${State.recordedActions.length} actions`);
      UI.pageBorderClear();
      UI.render();
    },

    onEvent(event) {
      // Ignore events from our own UI (composedPath crosses shadow DOM boundary)
      if (event.composedPath().some(el => el.id === 'autoclicus-container')) return;
      // Ignore clicks on guided overlay
      if (event.composedPath().some(el => el.id === 'autoclicus-guided-overlay')) return;

      const target = event.target;
      const eventType = event.type;

      // Skip certain events
      if (eventType === 'keydown' && !['Enter', 'Tab'].includes(event.key)) return;

      const fingerprint = Fingerprint.capture(target, eventType);

      const action = {
        id: Date.now().toString(36) + Math.random().toString(36).substring(2, 9),
        type: 'action',
        eventType: eventType,
        fingerprint: fingerprint,
        value: target.value || target.textContent?.trim() || '',
        timestamp: Date.now()
      };

      // GUIDED MODE: Route action to scenario step instead of global actions list
      if (State.scenario.isGuided && State.scenario.guidedStep) {
        const stepId = State.scenario.guidedStep;
        if (!State.scenario.stepActions[stepId]) {
          State.scenario.stepActions[stepId] = [];
        }
        State.scenario.stepActions[stepId] = [action]; // Single action per step
        Scenario.stopGuidedRecording();
        return;
      }

      // Deduplicate: checkbox/radio clicks fire click + input + change
      // Keep only the click, skip redundant input/change on same element within 100ms
      const lastAction = State.recordedActions[State.recordedActions.length - 1];
      if (lastAction && lastAction.fingerprint.selector === fingerprint.selector) {
        const timeDelta = action.timestamp - lastAction.timestamp;

        // Same element within 100ms — likely same user gesture
        if (timeDelta < 100 && (eventType === 'input' || eventType === 'change')) {
          // Update value on the existing action but don't add a new one
          lastAction.value = action.value;
          return;
        }

        // Debounce rapid input typing (500ms window)
        if (eventType === 'input' && lastAction.eventType === 'input' && timeDelta < 500) {
          lastAction.value = action.value;
          lastAction.timestamp = action.timestamp;
          UI.render();
          return;
        }
      }

      State.recordedActions.push(action);
      UI.render();
    }
  };

  // =============================================================================
  // PLAYER - Playback engine
  // =============================================================================
  const Player = {
    async start() {
      if (State.isPlaying) return;

      // Preflight check
      try {
        await Conditions.runPreflight(State.conditions);
      } catch (e) {
        UI.flash('error', e.message);
        return;
      }

      State.isPlaying = true;
      State.isPaused = false;
      State.currentStep = 0;
      State.currentLoop = 0;
      State.startTime = Date.now();
      State.sessionId = Audit.generateId();
      State.auditTrail = [];
      State.loopTimestamps = [];
      State.loopStartTime = Date.now();
      State.deadlineTime = State.countdownEnd || null;

      const startMsg = State.dryRun ? 'Simulation démarrée'
        : State.vibeTheme === 'plage' ? 'Lecture démarrée — vague en approche! 🌊'
        : State.vibeTheme === 'ski' ? 'Lecture démarrée — descente! 🏔️'
        : 'Lecture démarrée';
      UI.flash('success', startMsg);
      UI.pageBorderFlash('play');
      UI.render();

      await this.run();
    },

    async run() {
      const actions = State.recordedActions;

      // Detect loop_start marker — split into setup + loop actions
      const loopIdx = actions.findIndex(a => a.type === 'loop_start');
      const hasLoop = loopIdx >= 0;
      const setupActions = hasLoop ? actions.slice(0, loopIdx) : [];
      const loopActions = hasLoop ? actions.slice(loopIdx + 1) : actions;

      // Execute setup actions ONCE (before loop)
      if (hasLoop && setupActions.length > 0) {
        for (let i = 0; i < setupActions.length; i++) {
          if (!State.isPlaying) return;
          while (State.isPaused) await this.sleep(100);

          State.currentStep = i;
          UI.updatePlaybackDisplay();

          try {
            await this.execAction(setupActions[i]);
          } catch (e) {
            console.error('Setup action error:', e);
            UI.flash('error', `Erreur setup: ${e.message}`);
            this.stop();
            return;
          }

          await this.sleep(State.settings.delayBetweenActions / State.speed);
        }
      }

      // Execute loop actions × loopCount
      while (State.isPlaying && State.currentLoop < State.loopCount) {
        State.currentLoop++;
        State.currentStep = hasLoop ? setupActions.length : 0;
        State.loopStartTime = Date.now();

        for (let i = 0; i < loopActions.length; i++) {
          if (!State.isPlaying) break;

          // Pause with safety: max 30 min to prevent infinite hang
          let pauseStart = Date.now();
          while (State.isPaused && State.isPlaying) {
            await this.sleep(100);
            if (Date.now() - pauseStart > 1800000) {
              UI.flash('warning', 'Pause expirée après 30 min — arrêt');
              this.stop();
              return;
            }
          }

          State.currentStep = (hasLoop ? setupActions.length + 1 : 0) + i;
          UI.updatePlaybackDisplay(); // P1: targeted update, not full re-render

          const action = loopActions[i];

          // Handle condition_check (error detection from scenario)
          if (action.type === 'condition_check') {
            try {
              const { element } = Fingerprint.resolve(action.fingerprint);
              if (element && element.offsetParent !== null) {
                // Error detected — execute recovery action if configured
                const recoveryAction = loopActions.find(a => a.type === 'error_recovery');
                if (recoveryAction) {
                  try {
                    UI.flash('warning', 'Erreur détectée — exécution du retour…');
                    await this.execAction(recoveryAction);
                    await this.sleep(1500);
                  } catch (re) { /* recovery failed, still stop */ }
                }
                UI.flash('error', 'Erreur de concurrence détectée — arrêt automatique');
                this.stop();
                return;
              }
            } catch (e) { /* element not found = no error, continue */ }
            continue;
          }

          // Handle error_recovery (executed by condition_check above, skip in normal flow)
          if (action.type === 'error_recovery') {
            continue;
          }

          try {
            await this.execActionWithTimeout(action, 15000);
          } catch (e) {
            console.error('Action execution error:', e);
            Audit.log(action, action.fingerprint, action.value, 'error', 0);

            // Check for fallback
            const globalIdx = hasLoop ? setupActions.length + 1 + i : i;
            const condition = State.conditions.find(c => c.triggerIndex === globalIdx);
            if (condition && condition.fallbackActions) {
              await this.executeFallback(condition.fallbackActions);
            } else {
              // Log error but continue to next action instead of killing entire loop
              UI.flash('warning', `⏭️ Action échouée, passage à la suivante`);
              console.warn(`Skipping failed action [${i}]: ${e.message}`);
            }
          }

          // Check time limits
          if (State.timeLimit && (Date.now() - State.startTime) > State.timeLimit) {
            UI.flash('warning', 'Limite de temps atteinte');
            this.stop();
            return;
          }

          if (State.deadlineTime && Date.now() > State.deadlineTime) {
            UI.flash('warning', 'Heure limite atteinte');
            this.stop();
            return;
          }

          // Delay between actions
          await this.sleep(State.settings.delayBetweenActions / State.speed);
        }

        // Record loop completion for stats
        State.loopTimestamps.push(Date.now() - State.loopStartTime);
        // P3: Flush audit at loop boundary
        Audit.save();

        // Check deadline between loops
        if (State.deadlineTime && Date.now() > State.deadlineTime) {
          UI.flash('warning', 'Heure limite atteinte');
          this.stop();
          return;
        }

        if (State.currentLoop < State.loopCount) {
          await this.sleep(State.settings.delayBetweenLoops / State.speed);
        }
      }

      if (State.isPlaying) {
        this.stop();
        const doneMsg = State.vibeTheme === 'plage' ? 'Lecture terminée — cocktail time! 🍹' : State.vibeTheme === 'ski' ? 'Lecture terminée — après-ski! 🎿' : 'Lecture terminée';
        UI.flash('success', doneMsg);
      }
    },

    async execAction(action) {
      const startTime = Date.now();

      try {
        if (action.type === 'wait') {
          await this.sleep(action.delay || 1000);
          Audit.log(action, 'wait', `${action.delay}ms`, 'success', Date.now() - startTime);
          return;
        }

        if (action.type === 'navigate') {
          if (!State.dryRun) {
            window.location.href = action.url;
          }
          Audit.log(action, 'navigate', action.url, 'success', Date.now() - startTime);
          return;
        }

        if (action.type === 'prompt') {
          await this.showPrompt(action);
          Audit.log(action, action.targetSelector, 'user_input', 'success', Date.now() - startTime);
          return;
        }

        if (action.type === 'confirm') {
          const result = await this.showConfirm(action);
          Audit.log(action, 'confirm', result ? 'yes' : 'no', 'success', Date.now() - startTime);
          if (!result) {
            this.stop();
            return;
          }
          return;
        }

        if (action.type === 'paste_buyer_rate' || action.type === 'paste_seller_rate') {
          const rate = action.type === 'paste_buyer_rate' ? State.tauxAcheteur : State.tauxVendeur;
          const label = action.type === 'paste_buyer_rate' ? 'acheteur' : 'vendeur';
          if (!rate) {
            UI.flash('error', `Taux ${label} non défini`);
            Audit.log(action, action.type, 'missing_rate', 'error', Date.now() - startTime);
            return;
          }
          // P2 fix: ensure focus on target field (guard against focus theft)
          let activeEl = document.activeElement;
          if (!(activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) && action.targetFingerprint) {
            try {
              const { element: target } = Fingerprint.resolve(action.targetFingerprint);
              if (target) { target.focus(); activeEl = target; }
            } catch (e) { /* fallback to clipboard */ }
          }
          if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
            if (!State.dryRun) {
              this.setInputValue(activeEl, rate);
            }
            Audit.log(action, action.type, rate, 'success', Date.now() - startTime);
          } else {
            // Try clipboard fallback
            if (!State.dryRun) {
              try { await navigator.clipboard.writeText(rate); } catch (e) { /* ignore */ }
            }
            Audit.log(action, action.type, `clipboard:${rate}`, 'success', Date.now() - startTime);
          }
          return;
        }

        // Regular action — resolve with retry (Angular/SPA may still be rendering)
        let resolved = Fingerprint.resolve(action.fingerprint);
        if (!resolved.element) {
          // Retry up to 3 times with increasing delays
          for (let retry = 0; retry < 3 && !resolved.element; retry++) {
            await this.sleep(500 * (retry + 1));
            resolved = Fingerprint.resolve(action.fingerprint);
          }
        }
        const { element, confidence } = resolved;

        if (!element) {
          console.warn(`⏭️ Element not found after retries, skipping: ${action.fingerprint.selector}`);
          Audit.log(action, action.fingerprint?.selector, '', 'skipped', 0);
          return;
        }

        if (confidence < 30) {
          console.warn(`Low confidence (${confidence}%) for element:`, action.fingerprint);
        }

        // Visual feedback
        UI.highlightElement(element, State.dryRun);

        if (!State.dryRun) {
          // Warn if element is disabled (click will silently fail)
          if (element.disabled || element.getAttribute('aria-disabled') === 'true') {
            console.warn('⚠️ Clicking disabled element:', action.fingerprint.selector);
          }

          // Execute action
          switch (action.eventType) {
            case 'click':
              if (typeof element.click === 'function') {
                element.click();
              } else {
                element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
              }
              break;
            case 'input':
            case 'change':
              this.setInputValue(element, action.value);
              break;
            case 'keydown':
              element.dispatchEvent(new KeyboardEvent('keydown', { key: action.value }));
              break;
          }
        }

        Audit.log(action, action.fingerprint, action.value, 'success', Date.now() - startTime);
      } catch (e) {
        Audit.log(action, action.fingerprint, action.value, 'error', Date.now() - startTime);
        throw e;
      }
    },

    async execActionWithTimeout(action, timeoutMs) {
      return Promise.race([
        this.execAction(action),
        new Promise((_, reject) => setTimeout(() => reject(new Error(`Action timeout (${timeoutMs/1000}s)`)), timeoutMs))
      ]);
    },

    setInputValue(element, value) {
      const proto = element instanceof HTMLTextAreaElement
        ? window.HTMLTextAreaElement.prototype
        : window.HTMLInputElement.prototype;
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;

      if (element instanceof HTMLSelectElement) {
        element.value = value;
      } else if (nativeInputValueSetter) {
        nativeInputValueSetter.call(element, value);
      } else {
        element.value = value;
      }

      // Trigger events
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));
    },

    async showPrompt(action) {
      return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          z-index: 1000000;
          min-width: 400px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;

        safeHTML(modal, `
          <h3 style="margin: 0 0 10px 0; color: ${Config.theme.primary}; font-size: 20px;">
            ${action.title || 'Entrée requise'}
          </h3>
          <p style="margin: 0 0 20px 0; color: ${Config.theme.textSecondary}; font-size: 14px;">
            ${action.message || 'Veuillez entrer une valeur'}
          </p>
          <input type="text" id="prompt-input" placeholder="${action.placeholder || ''}"
                 value="${action.defaultValue || ''}"
                 style="width: 100%; padding: 10px; border: 1px solid ${Config.theme.border};
                        border-radius: 6px; font-size: 16px; box-sizing: border-box; margin-bottom: 20px;">
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="prompt-cancel" style="padding: 10px 20px; background: #fff; color: ${Config.theme.text};
                    border: 1px solid ${Config.theme.border}; border-radius: 6px; cursor: pointer; font-size: 14px;">
              Annuler
            </button>
            <button id="prompt-ok" style="padding: 10px 20px; background: ${Config.theme.primary}; color: white;
                    border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
              Confirmer
            </button>
          </div>
        `);

        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999999;
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        const input = modal.querySelector('#prompt-input');
        const okBtn = modal.querySelector('#prompt-ok');
        const cancelBtn = modal.querySelector('#prompt-cancel');

        input.focus();

        const cleanup = () => {
          document.body.removeChild(overlay);
          document.body.removeChild(modal);
        };

        const submit = () => {
          const value = input.value;

          if (action.required && !value) {
            input.style.borderColor = Config.theme.error;
            return;
          }

          // Rate validation (non-blocking — no confirm() during execution)
          const numValue = parseFloat(value);
          if (!isNaN(numValue) && action.id?.includes('taux')) {
            if (numValue < Config.rateValidation.min || numValue > Config.rateValidation.max) {
              if (!input.dataset.warningAcknowledged) {
                input.style.borderColor = Config.theme.warning;
                input.dataset.warningAcknowledged = 'true';
                let warning = modal.querySelector('.rate-warning');
                if (!warning) {
                  warning = document.createElement('div');
                  warning.className = 'rate-warning';
                  warning.style.cssText = `color: ${Config.theme.warning}; font-size: 12px; margin-top: 6px; font-weight: 500;`;
                  input.parentNode.appendChild(warning);
                }
                warning.textContent = `⚠️ Taux ${numValue} hors limites (${Config.rateValidation.min}-${Config.rateValidation.max}). Cliquez OK à nouveau pour confirmer.`;
                return;
              }
            }
          }

          cleanup();

          // Inject value into target field
          if (action.targetSelector) {
            const target = document.querySelector(action.targetSelector);
            if (target) {
              Player.setInputValue(target, value);
            }
          }

          resolve(value);
        };

        okBtn.addEventListener('click', submit);
        cancelBtn.addEventListener('click', () => {
          cleanup();
          Player.stop();
          resolve(null);
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') submit();
          if (e.key === 'Escape') cancelBtn.click();
        });
      });
    },

    async showConfirm(action) {
      return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          z-index: 1000000;
          min-width: 400px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;

        safeHTML(modal, `
          <h3 style="margin: 0 0 10px 0; color: ${Config.theme.primary}; font-size: 20px;">
            ${action.title || 'Confirmation'}
          </h3>
          <p style="margin: 0 0 10px 0; color: ${Config.theme.text}; font-size: 14px;">
            ${action.message || 'Voulez-vous continuer?'}
          </p>
          ${action.details ? `<p style="margin: 0 0 20px 0; color: ${Config.theme.textSecondary}; font-size: 13px;">${action.details}</p>` : ''}
          <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
            <button id="confirm-cancel" style="padding: 10px 20px; background: #fff; color: ${Config.theme.text};
                    border: 1px solid ${Config.theme.border}; border-radius: 6px; cursor: pointer; font-size: 14px;">
              ${action.cancelLabel || 'Non'}
            </button>
            <button id="confirm-ok" style="padding: 10px 20px; background: ${Config.theme.primary}; color: white;
                    border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
              ${action.okLabel || 'Oui'}
            </button>
          </div>
        `);

        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999999;
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        const okBtn = modal.querySelector('#confirm-ok');
        const cancelBtn = modal.querySelector('#confirm-cancel');

        okBtn.focus();

        const cleanup = () => {
          document.body.removeChild(overlay);
          document.body.removeChild(modal);
        };

        okBtn.addEventListener('click', () => {
          cleanup();
          resolve(true);
        });

        cancelBtn.addEventListener('click', () => {
          cleanup();
          resolve(false);
        });
      });
    },

    async executeFallback(actions) {
      UI.flash('info', 'Exécution du plan de secours');

      for (let action of actions) {
        await this.execAction(action);
        await this.sleep(1000 / State.speed);
      }
    },

    pause() {
      State.isPaused = true;
      UI.render();
    },

    resume() {
      State.isPaused = false;
      UI.render();
    },

    stop() {
      State.isPlaying = false;
      State.isPaused = false;
      State.totalDuration = Date.now() - (State.startTime || Date.now());
      Audit.save(); // P3: Final flush on stop
      UI.pageBorderClear();
      UI.render();
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  };

  // =============================================================================
  // UI - User interface
  // =============================================================================
  const UI = {
    init() {
      // Create container
      const container = document.createElement('div');
      container.id = 'autoclicus-container';

      // Attach shadow DOM with fallback to regular DOM (some banking sites restrict Shadow DOM)
      try {
        State.shadowRoot = container.attachShadow({ mode: 'open' });
      } catch (e) {
        console.warn('AutoClicUS: Shadow DOM unavailable — using scoped regular DOM');
        State.shadowRoot = container;
      }

      // Create styles
      const style = document.createElement('style');
      style.textContent = this.getStyles();
      State.shadowRoot.appendChild(style);

      // Create UI
      const ui = document.createElement('div');
      ui.id = 'autoclicus-ui';
      State.shadowRoot.appendChild(ui);

      document.body.appendChild(container);

      this.render();
      this.attachKeyboardShortcuts();
    },

    getStyles() {
      return `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes ai-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes ai-pulse {
          0%, 100% { box-shadow: 0 0 8px rgba(0, 135, 78, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 135, 78, 0.6), 0 0 40px rgba(0, 166, 90, 0.2); }
        }

        @keyframes ai-glow-ring {
          0%, 100% { box-shadow: 0 0 0 2px rgba(255,255,255,0.6); }
          50% { box-shadow: 0 0 0 2px rgba(255,255,255,0.9), 0 0 12px rgba(255,255,255,0.4); }
        }

        @keyframes ai-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        @keyframes ai-recording-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(220, 53, 69, 0); }
        }

        @keyframes ai-progress-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes ai-shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes ai-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes minimized-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Minimized strip */
        .minimized-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%);
          border-radius: 14px;
          cursor: pointer;
          user-select: none;
        }
        .mini-actions {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }
        .mini-btn {
          width: 26px;
          height: 26px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.08);
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, opacity 0.2s;
          flex-shrink: 0;
        }
        .mini-btn:hover { background: rgba(255,255,255,0.2); }
        .mini-btn:disabled { opacity: 0.3; cursor: default; }
        .mini-btn.rec-active { background: rgba(220,53,69,0.4); border-color: rgba(220,53,69,0.6); }
        .mini-btn.play-active { background: rgba(74,222,128,0.3); border-color: rgba(74,222,128,0.5); }

        .minimized-strip .mini-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.5);
          object-fit: cover;
          flex-shrink: 0;
        }

        .minimized-strip .mini-label {
          font-size: 12px;
          font-weight: 600;
          color: white;
          white-space: nowrap;
        }

        .minimized-strip .mini-progress-wrap {
          flex: 1;
          min-width: 60px;
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .minimized-strip .mini-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4ade80, #22c55e);
          border-radius: 3px;
          transition: width 0.3s ease;
          box-shadow: 0 0 6px rgba(74, 222, 128, 0.5);
        }

        .minimized-strip .mini-progress-fill.recording {
          background: linear-gradient(90deg, #dc3545, #ff6b6b);
          box-shadow: 0 0 6px rgba(220, 53, 69, 0.5);
        }

        .minimized-strip .mini-status {
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }

        .minimized-strip .mini-expand {
          width: 24px;
          height: 24px;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .minimized-strip .mini-expand:hover {
          background: rgba(255,255,255,0.25);
        }

        .minimized-strip.playing {
          border: 1px solid rgba(74, 222, 128, 0.4);
          box-shadow: 0 0 12px rgba(74, 222, 128, 0.2);
        }

        .minimized-strip.recording-state {
          border: 1px solid rgba(220, 53, 69, 0.4);
          box-shadow: 0 0 12px rgba(220, 53, 69, 0.2);
        }

        /* Minimize button in header */
        .header-minimize {
          width: 28px;
          height: 28px;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
          margin-left: 6px;
        }
        .header-minimize:hover {
          background: rgba(255,255,255,0.25);
        }

        #autoclicus-ui {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 520px;
          min-width: 380px;
          max-width: 90vw;
          max-height: 90vh;
          background: ${Config.theme.bg};
          border: 2px solid rgba(0, 135, 78, 0.2);
          border-radius: 16px;
          box-shadow: 0 10px 40px ${Config.theme.shadow}, 0 0 0 1px rgba(0, 135, 78, 0.05);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          color: ${Config.theme.text};
          z-index: 999999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: border-color 0.4s, box-shadow 0.4s;
        }

        #autoclicus-ui.state-recording {
          border-color: ${Config.theme.error};
          box-shadow: 0 0 20px rgba(220, 53, 69, 0.3), 0 0 40px rgba(220, 53, 69, 0.1), 0 10px 40px ${Config.theme.shadow};
          animation: ai-recording-pulse 1.5s ease-in-out infinite;
        }

        #autoclicus-ui.state-playing {
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 20px rgba(0, 135, 78, 0.3), 0 0 40px rgba(0, 135, 78, 0.1), 0 10px 40px ${Config.theme.shadow};
          animation: ai-pulse 2s ease-in-out infinite;
        }

        .header {
          background: linear-gradient(135deg, ${Config.theme.primary} 0%, #005a34 40%, ${Config.theme.primaryLight} 100%);
          background-size: 200% 200%;
          animation: ai-gradient 6s ease infinite;
          color: white;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
          cursor: move;
          user-select: none;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .header-avatar {
          flex-shrink: 0;
          position: relative;
        }

        .header-avatar img {
          animation: ai-glow-ring 3s ease-in-out infinite;
        }

        .header-info {
          flex: 1;
        }

        .header-title {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        .header-subtitle {
          font-size: 11px;
          opacity: 0.85;
        }

        .header-ai-badge {
          display: inline-block;
          padding: 1px 5px;
          background: rgba(255,255,255,0.25);
          border-radius: 6px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          vertical-align: middle;
          margin-left: 4px;
        }

        .header-right {
          text-align: right;
          flex-shrink: 0;
        }

        .header-clock {
          font-size: 18px;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        .header-countdown {
          font-size: 13px;
          font-weight: 800;
          color: #ff2222;
          font-variant-numeric: tabular-nums;
          margin-top: 1px;
          text-shadow: 0 1px 0 rgba(0,0,0,0.6), 0 0 4px rgba(255,34,34,0.4);
          letter-spacing: 0.8px;
          background: rgba(255,255,255,0.92);
          padding: 1px 6px;
          border-radius: 4px;
          border: 1px solid rgba(255,34,34,0.4);
        }

        .header-countdown.expired {
          color: #cc0000;
          animation: ai-recording-pulse 0.8s ease-in-out infinite;
          text-shadow: none;
          background: rgba(255,255,255,0.95);
          border-color: rgba(255,0,0,0.6);
        }

        .header-ai-status {
          font-size: 9px;
          opacity: 0.8;
          margin-top: 1px;
          display: flex;
          align-items: center;
          gap: 3px;
          justify-content: flex-end;
        }

        .ai-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          animation: ai-dot-pulse 2s ease-in-out infinite;
        }

        /* Rate bar */
        .rate-bar {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          padding: 6px 14px;
          background: ${Config.theme.bgSecondary};
          border-bottom: 1px solid ${Config.theme.border};
          font-size: 13px;
        }

        .rate-field {
          flex: 1;
          min-width: 0;
        }

        .rate-field label {
          display: block;
          font-size: 10px;
          font-weight: 600;
          color: ${Config.theme.textSecondary};
          text-transform: uppercase;
          letter-spacing: 0.3px;
          white-space: nowrap;
          margin-bottom: 2px;
        }

        .rate-field input {
          width: 100%;
          min-width: 70px;
          padding: 4px 6px;
          border: 1px solid ${Config.theme.border};
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'SF Mono', 'Courier New', monospace;
          color: ${Config.theme.primary};
          text-align: center;
          background: white;
        }

        .rate-field input:focus {
          outline: none;
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 0 2px rgba(0, 135, 78, 0.15);
        }

        .rate-divider {
          width: 1px;
          height: 28px;
          background: ${Config.theme.border};
        }

        /* Geek progress bar */
        .progress-bar-geek {
          height: 8px;
          background: #0a0a0a;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 16px;
          position: relative;
          border: 1px solid rgba(0, 135, 78, 0.3);
        }

        .progress-bar-geek .progress-fill-geek {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s;
          position: relative;
          overflow: hidden;
        }

        .progress-bar-geek .progress-fill-geek.playing {
          background: linear-gradient(90deg, #00874e, #00ff88, #00874e);
          background-size: 200% 100%;
          animation: ai-progress-sweep 1s linear infinite;
          box-shadow: 0 0 8px rgba(0, 255, 136, 0.6), inset 0 0 4px rgba(0, 255, 136, 0.3);
        }

        .progress-bar-geek .progress-fill-geek.recording {
          background: linear-gradient(90deg, #dc3545, #ff6b6b, #dc3545);
          background-size: 200% 100%;
          animation: ai-progress-sweep 0.8s linear infinite;
          box-shadow: 0 0 8px rgba(220, 53, 69, 0.6), inset 0 0 4px rgba(255, 107, 107, 0.3);
        }

        .progress-bar-geek::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px);
          pointer-events: none;
        }

        /* Resize handle */
        .resize-edge {
          position: absolute;
          z-index: 10;
        }
        .resize-edge[data-dir="n"] { top:-3px; left:8px; right:8px; height:6px; cursor:ns-resize; }
        .resize-edge[data-dir="s"] { bottom:-3px; left:8px; right:8px; height:6px; cursor:ns-resize; }
        .resize-edge[data-dir="w"] { left:-3px; top:8px; bottom:8px; width:6px; cursor:ew-resize; }
        .resize-edge[data-dir="e"] { right:-3px; top:8px; bottom:8px; width:6px; cursor:ew-resize; }
        .resize-edge[data-dir="nw"] { top:-3px; left:-3px; width:12px; height:12px; cursor:nw-resize; }
        .resize-edge[data-dir="ne"] { top:-3px; right:-3px; width:12px; height:12px; cursor:ne-resize; }
        .resize-edge[data-dir="sw"] { bottom:-3px; left:-3px; width:12px; height:12px; cursor:sw-resize; }
        .resize-edge[data-dir="se"] { bottom:-3px; right:-3px; width:12px; height:12px; cursor:se-resize; }

        /* Execution stats */
        .exec-stats {
          background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%);
          padding: 8px 14px 6px;
          border-bottom: 1px solid rgba(0, 135, 78, 0.2);
        }

        .exec-stats-row {
          display: flex;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 6px;
        }

        .exec-stat {
          text-align: center;
          flex: 1;
        }

        .exec-stat-value {
          display: block;
          font-size: 15px;
          font-weight: 700;
          font-family: 'SF Mono', 'Courier New', monospace;
          color: #4ade80;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
        }

        .exec-stat-label {
          font-size: 9px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .exec-stats-progress {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 2px;
        }

        .exec-stats-fill {
          height: 100%;
          background: linear-gradient(90deg, #4ade80, #22c55e);
          border-radius: 2px;
          transition: width 0.3s ease;
          box-shadow: 0 0 6px rgba(74, 222, 128, 0.5);
        }

        /* Bottom status strip */
        .bottom-strip {
          padding: 6px 14px;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid ${Config.theme.border};
          background: ${Config.theme.bgSecondary};
          transition: all 0.3s;
        }

        .bottom-strip.recording {
          background: linear-gradient(90deg, rgba(220,53,69,0.08), rgba(220,53,69,0.15), rgba(220,53,69,0.08));
          background-size: 200% 100%;
          animation: ai-progress-sweep 2s linear infinite;
          border-top-color: rgba(220,53,69,0.3);
          color: ${Config.theme.error};
        }

        .bottom-strip.playing {
          background: linear-gradient(90deg, rgba(0,135,78,0.08), rgba(0,135,78,0.15), rgba(0,135,78,0.08));
          background-size: 200% 100%;
          animation: ai-progress-sweep 2s linear infinite;
          border-top-color: rgba(0,135,78,0.3);
          color: ${Config.theme.primary};
        }

        .bottom-strip .status-icon {
          font-size: 14px;
        }

        .tabs {
          display: flex;
          flex-wrap: wrap;
          background: ${Config.theme.bgSecondary};
          border-bottom: 1px solid ${Config.theme.border};
          overflow: visible;
          padding: 6px 8px 4px;
          gap: 4px;
        }

        .tab {
          flex: 0 0 auto;
          padding: 8px 10px;
          text-align: center;
          cursor: pointer;
          border: 1px solid transparent;
          background: transparent;
          color: ${Config.theme.textSecondary};
          font-size: 12px;
          font-weight: 500;
          transition: all 0.2s;
          position: relative;
          white-space: nowrap;
          border-radius: 6px;
        }

        .tab:hover {
          background: rgba(0, 135, 78, 0.08);
          color: ${Config.theme.primary};
          border-color: rgba(0, 135, 78, 0.15);
        }

        .tab.active {
          color: ${Config.theme.primary};
          font-weight: 600;
          background: rgba(0, 135, 78, 0.1);
          border-color: rgba(0, 135, 78, 0.25);
        }

        .content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          scrollbar-width: thin;
          scrollbar-color: rgba(0,0,0,0.15) transparent;
        }

        .content::-webkit-scrollbar {
          width: 4px;
        }

        .content::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.15);
          border-radius: 2px;
        }

        .btn {
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }

        .btn-primary {
          background: linear-gradient(135deg, ${Config.theme.primary} 0%, ${Config.theme.primaryLight} 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::after {
          left: 100%;
        }

        .btn-primary:hover {
          box-shadow: 0 4px 16px rgba(0, 135, 78, 0.4), 0 0 8px rgba(0, 166, 90, 0.2);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: white;
          color: ${Config.theme.text};
          border: 1px solid ${Config.theme.border};
        }

        .btn-secondary:hover {
          background: ${Config.theme.bgSecondary};
        }

        .btn-danger {
          background: linear-gradient(135deg, ${Config.theme.error}, #ff4444);
          color: white;
        }

        .btn-danger:hover {
          box-shadow: 0 4px 16px rgba(220, 53, 69, 0.4);
          transform: translateY(-1px);
        }

        .btn-warning {
          background: linear-gradient(135deg, #e6a800, #ffc107);
          color: #1a1a1a;
          font-weight: 600;
        }

        .btn-warning:hover {
          box-shadow: 0 4px 16px rgba(255, 193, 7, 0.4);
          transform: translateY(-1px);
        }

        .btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        .btn-small {
          padding: 6px 12px;
          font-size: 12px;
        }

        .btn-group {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .input-group {
          margin-bottom: 16px;
        }

        .input-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: ${Config.theme.text};
          font-size: 13px;
        }

        .input-group input,
        .input-group select,
        .input-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          font-family: inherit;
          font-size: 14px;
          color: ${Config.theme.text};
          background: white;
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 0 3px rgba(0, 135, 78, 0.1);
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .checkbox-group label {
          cursor: pointer;
          user-select: none;
        }

        .card {
          background: white;
          border: 1px solid ${Config.theme.border};
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 16px;
          transition: all 0.25s ease;
        }

        .card:hover {
          border-color: rgba(0, 135, 78, 0.3);
          box-shadow: 0 2px 12px rgba(0, 135, 78, 0.08);
        }

        .card-header {
          font-weight: 600;
          margin-bottom: 12px;
          color: ${Config.theme.text};
          font-size: 15px;
        }

        .file-browser {
          max-height: 260px;
          overflow-y: auto;
          margin-top: 8px;
        }

        .file-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          margin-bottom: 4px;
          cursor: pointer;
          transition: all 0.15s;
          background: ${Config.theme.bg};
        }

        .file-item:hover {
          border-color: ${Config.theme.primary};
          background: rgba(0,135,78,0.04);
          transform: translateX(2px);
        }

        .file-item-icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        .file-item-name {
          font-weight: 600;
          font-size: 12px;
          color: ${Config.theme.text};
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .file-item-meta {
          font-size: 10px;
          color: ${Config.theme.textSecondary};
          text-align: right;
          flex-shrink: 0;
          line-height: 1.4;
        }

        .file-browser-dir {
          font-size: 10px;
          color: ${Config.theme.textSecondary};
          margin-top: 4px;
          padding: 3px 6px;
          background: rgba(0,0,0,0.03);
          border-radius: 4px;
          font-family: 'SF Mono', monospace;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .file-browser-empty {
          text-align: center;
          padding: 16px;
          color: ${Config.theme.textSecondary};
          font-size: 12px;
        }

        .action-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .action-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          margin-bottom: 8px;
          background: white;
        }

        .action-item.active {
          background: linear-gradient(135deg, rgba(0, 135, 78, 0.05), rgba(0, 166, 90, 0.08));
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 0 1px rgba(0, 135, 78, 0.1), 0 2px 8px rgba(0, 135, 78, 0.1);
          animation: ai-float 2s ease-in-out infinite;
        }

        .action-item.prompt {
          border-left: 3px solid ${Config.theme.warning};
        }

        .action-item.confirm {
          border-left: 3px solid ${Config.theme.primary};
        }

        .action-index {
          font-weight: 600;
          color: ${Config.theme.textSecondary};
          min-width: 30px;
        }

        .action-type {
          font-size: 12px;
          padding: 3px 8px;
          background: ${Config.theme.bgSecondary};
          border-radius: 4px;
          color: ${Config.theme.textSecondary};
          font-weight: 500;
        }

        .action-details {
          flex: 1;
          font-size: 13px;
          color: ${Config.theme.text};
        }

        .action-delete {
          padding: 4px 8px;
          background: transparent;
          border: none;
          color: ${Config.theme.error};
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
        }

        .progress-bar {
          height: 6px;
          background: ${Config.theme.bgSecondary};
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, ${Config.theme.primary}, ${Config.theme.primaryLight}, #4ade80, ${Config.theme.primaryLight}, ${Config.theme.primary});
          background-size: 400% 100%;
          animation: ai-progress-sweep 2s linear infinite;
          transition: width 0.3s;
          border-radius: 3px;
        }

        .status-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }

        .status-success {
          background: rgba(0, 135, 78, 0.1);
          color: ${Config.theme.success};
        }

        .status-error {
          background: rgba(220, 53, 69, 0.1);
          color: ${Config.theme.error};
        }

        .status-warning {
          background: rgba(255, 193, 7, 0.1);
          color: ${Config.theme.warning};
        }

        .condition-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .condition-item {
          padding: 12px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          margin-bottom: 8px;
          background: white;
        }

        .condition-item.preflight {
          border-left: 3px solid ${Config.theme.primary};
        }

        .condition-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .condition-name {
          font-weight: 600;
          color: ${Config.theme.text};
        }

        .condition-details {
          font-size: 12px;
          color: ${Config.theme.textSecondary};
        }

        .audit-log {
          max-height: 400px;
          overflow-y: auto;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          background: ${Config.theme.bgSecondary};
          padding: 12px;
          border-radius: 6px;
        }

        .audit-entry {
          padding: 6px 0;
          border-bottom: 1px solid ${Config.theme.border};
        }

        .audit-entry:last-child {
          border-bottom: none;
        }

        .flash-message {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 12px 20px;
          border-radius: 6px;
          box-shadow: 0 4px 12px ${Config.theme.shadow};
          z-index: 1000000;
          animation: slideDown 0.3s ease-out;
          font-weight: 500;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .flash-success {
          background: ${Config.theme.success};
          color: white;
        }

        .flash-error {
          background: ${Config.theme.error};
          color: white;
        }

        .flash-warning {
          background: ${Config.theme.warning};
          color: ${Config.theme.text};
        }

        .flash-info {
          background: ${Config.theme.primary};
          color: white;
        }

        /* Scenario tab styles */
        .scenario-step {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid ${Config.theme.border};
          border-radius: 8px;
          margin-bottom: 6px;
          background: white;
          transition: background 0.15s ease;
        }

        .scenario-step:hover {
          background: ${Config.theme.bgSecondary};
        }

        .scenario-step.is-marker {
          background: linear-gradient(135deg, rgba(0,135,78,0.08), rgba(0,166,90,0.04));
          border-left: 3px solid ${Config.theme.primary};
          font-weight: 600;
        }

        .scenario-step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 22px;
          height: 22px;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .scenario-badge-unconfigured {
          background: #e9ecef;
          color: #6c757d;
        }

        .scenario-badge-configured {
          background: ${Config.theme.success};
          color: white;
        }

        .scenario-badge-auto {
          background: #e3f2fd;
          color: #1976d2;
        }

        .scenario-badge-optional {
          background: #fff3e0;
          color: #f57c00;
        }

        .scenario-step-info {
          flex: 1;
          min-width: 0;
        }

        .scenario-step-name {
          font-size: 13px;
          font-weight: 500;
          color: ${Config.theme.text};
        }

        .scenario-step-detail {
          font-size: 11px;
          color: ${Config.theme.textSecondary};
          margin-top: 2px;
        }

        .scenario-step-action {
          flex-shrink: 0;
        }

        .btn-configure {
          padding: 5px 12px;
          font-size: 12px;
          background: ${Config.theme.primary};
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .btn-configure:hover {
          background: ${Config.theme.primaryLight};
          transform: translateY(-1px);
        }

        .btn-configure.reconfigure {
          background: transparent;
          color: ${Config.theme.primary};
          border: 1px solid ${Config.theme.primary};
        }

        .scenario-toggle-group {
          display: flex;
          gap: 0;
          border: 1px solid ${Config.theme.border};
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .scenario-toggle-btn {
          flex: 1;
          padding: 10px 16px;
          border: none;
          background: white;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          color: ${Config.theme.textSecondary};
          transition: all 0.2s ease;
        }

        .scenario-toggle-btn.active {
          background: ${Config.theme.primary};
          color: white;
        }

        .scenario-separator {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 12px 0;
          color: ${Config.theme.textSecondary};
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .scenario-separator::before,
        .scenario-separator::after {
          content: '';
          flex: 1;
          height: 1px;
          background: ${Config.theme.border};
        }

        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: ${Config.theme.textSecondary};
        }

        .empty-state-icon {
          font-size: 48px;
          margin-bottom: 12px;
          opacity: 0.5;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }

        .stat-card {
          background: ${Config.theme.bgSecondary};
          padding: 16px;
          border-radius: 8px;
          text-align: center;
        }

        .stat-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 135, 78, 0.1);
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: ${Config.theme.primary};
          margin-bottom: 4px;
          text-shadow: 0 0 20px rgba(0, 135, 78, 0.15);
        }

        .stat-label {
          font-size: 12px;
          color: ${Config.theme.textSecondary};
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 16px;
        }

        .table th {
          text-align: left;
          padding: 10px;
          background: ${Config.theme.bgSecondary};
          font-weight: 600;
          border-bottom: 2px solid ${Config.theme.border};
          font-size: 12px;
          color: ${Config.theme.textSecondary};
          text-transform: uppercase;
        }

        .table td {
          padding: 10px;
          border-bottom: 1px solid ${Config.theme.border};
        }

        .table tr:last-child td {
          border-bottom: none;
        }

        /* Tooltip system */
        .tooltip-wrap {
          position: relative;
          display: inline-block;
        }
        .tooltip-wrap::after {
          content: attr(data-tip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 10px;
          background: ${Config.theme.text};
          color: white;
          font-size: 11px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          z-index: 10;
          margin-bottom: 4px;
        }
        .tooltip-wrap:hover::after {
          opacity: 1;
        }

        /* Inline forms */
        .inline-form {
          padding: 16px;
          background: ${Config.theme.bgSecondary};
          border-radius: 8px;
          border: 1px solid ${Config.theme.border};
          margin-bottom: 16px;
        }
        .inline-form .form-row {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
          align-items: flex-end;
        }
        .inline-form .form-field {
          flex: 1;
        }
        .inline-form .form-field label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: ${Config.theme.textSecondary};
          margin-bottom: 4px;
        }
        .inline-form .form-field input,
        .inline-form .form-field select {
          width: 100%;
          padding: 8px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          font-size: 13px;
          font-family: inherit;
          background: white;
        }
        .inline-form .form-field input:focus,
        .inline-form .form-field select:focus {
          outline: none;
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 0 2px rgba(0, 135, 78, 0.1);
        }
        .form-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        /* Action row buttons */
        .action-btns {
          display: flex;
          gap: 2px;
          flex-shrink: 0;
        }
        .action-btn-mini {
          width: 28px;
          height: 28px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
          color: ${Config.theme.textSecondary};
        }
        .action-btn-mini:hover {
          background: ${Config.theme.bgSecondary};
          color: ${Config.theme.text};
        }
        .action-btn-mini.danger:hover {
          background: rgba(220, 53, 69, 0.1);
          color: ${Config.theme.error};
        }

        /* Inline edit input */
        .inline-edit {
          padding: 4px 8px;
          border: 1px solid ${Config.theme.primary};
          border-radius: 4px;
          font-size: 12px;
          width: 120px;
          font-family: inherit;
        }
        .inline-edit:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 135, 78, 0.2);
        }

        /* Settings */
        .shortcut-key {
          display: inline-block;
          padding: 4px 10px;
          background: ${Config.theme.bgSecondary};
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          font-weight: 600;
          min-width: 50px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .shortcut-key:hover {
          border-color: ${Config.theme.primary};
          background: rgba(0, 135, 78, 0.05);
        }
        .shortcut-key.capturing {
          border-color: ${Config.theme.primary};
          background: rgba(0, 135, 78, 0.1);
          animation: ai-pulse 1s ease-in-out infinite;
        }
        .setting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid ${Config.theme.border};
        }
        .setting-row:last-child {
          border-bottom: none;
        }
        .setting-label {
          font-size: 13px;
          color: ${Config.theme.text};
        }
        .setting-desc {
          font-size: 11px;
          color: ${Config.theme.textSecondary};
          margin-top: 2px;
        }

        /* Help */
        .help-section {
          margin-bottom: 20px;
        }
        .help-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 10px;
          color: ${Config.theme.primary};
        }
        .help-step {
          display: flex;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid ${Config.theme.border};
        }
        .help-step:last-child {
          border-bottom: none;
        }
        .help-step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${Config.theme.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          flex-shrink: 0;
        }
        .help-step-text {
          font-size: 13px;
          color: ${Config.theme.text};
          line-height: 1.5;
        }
        .help-kbd {
          display: inline-block;
          padding: 2px 6px;
          background: ${Config.theme.bgSecondary};
          border: 1px solid ${Config.theme.border};
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          font-weight: 600;
        }

        /* Element picker */
        .picker-bar {
          padding: 10px 16px;
          background: linear-gradient(135deg, ${Config.theme.primary}, ${Config.theme.primaryLight});
          color: white;
          font-size: 13px;
          text-align: center;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .picker-bar:hover {
          filter: brightness(1.1);
        }
        .picker-result {
          padding: 8px 12px;
          background: ${Config.theme.bgSecondary};
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          margin-top: 8px;
          word-break: break-all;
        }

        /* Toggle switch */
        .toggle {
          position: relative;
          width: 44px;
          height: 24px;
          cursor: pointer;
        }
        .toggle input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-slider {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${Config.theme.border};
          border-radius: 24px;
          transition: 0.3s;
        }
        .toggle-slider::before {
          content: '';
          position: absolute;
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background: white;
          border-radius: 50%;
          transition: 0.3s;
        }
        .toggle input:checked + .toggle-slider {
          background: ${Config.theme.primary};
        }
        .toggle input:checked + .toggle-slider::before {
          transform: translateX(20px);
        }

        /* Action bar (between rate-bar and tabs) */
        .action-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: ${Config.theme.bgTertiary || '#f0f2f5'};
          border-bottom: 1px solid ${Config.theme.border};
        }
        .action-bar-buttons {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }
        .action-bar-btn {
          padding: 4px 10px;
          border: 1px solid ${Config.theme.border};
          background: white;
          color: ${Config.theme.text || '#333'};
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .action-bar-btn:hover { background: ${Config.theme.bgSecondary || '#f5f5f5'}; }
        .action-bar-btn:disabled { opacity: 0.35; cursor: default; }
        .action-bar-btn.rec { color: #dc3545; border-color: rgba(220,53,69,0.3); }
        .action-bar-btn.rec:hover { background: rgba(220,53,69,0.08); }
        .action-bar-btn.rec.active { background: rgba(220,53,69,0.12); border-color: #dc3545; font-weight: 600; }
        .action-bar-btn.play { color: #198754; border-color: rgba(25,135,84,0.3); }
        .action-bar-btn.play:hover { background: rgba(25,135,84,0.08); }
        .action-bar-btn.play.active { background: rgba(25,135,84,0.12); border-color: #198754; font-weight: 600; }
        .action-bar-btn.stop { color: #6c757d; }
        .action-bar-btn.pause { color: #fd7e14; border-color: rgba(253,126,20,0.3); }
        .action-bar-btn.pause:hover { background: rgba(253,126,20,0.08); }
        .action-bar-divider {
          width: 1px;
          height: 22px;
          background: ${Config.theme.border};
          flex-shrink: 0;
        }
        .action-bar-mode {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: ${Config.theme.textSecondary || '#666'};
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }
        .action-bar-mode-name {
          font-weight: 600;
          color: ${Config.theme.text || '#333'};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mode-badge {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }
        .mode-badge.scenario { background: rgba(13,110,253,0.1); color: #0d6efd; }
        .mode-badge.recording { background: rgba(220,53,69,0.1); color: #dc3545; }
        .mode-badge.playing { background: rgba(25,135,84,0.1); color: #198754; }
        .mode-badge.idle { background: rgba(108,117,125,0.1); color: #6c757d; }

        /* Info tooltip icon */
        .info-tip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(13,110,253,0.1);
          color: #0d6efd;
          font-size: 10px;
          font-weight: 700;
          cursor: help;
          position: relative;
          vertical-align: middle;
          flex-shrink: 0;
        }
        .info-tip:hover::after {
          content: attr(data-info);
          position: absolute;
          bottom: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%);
          background: #1a2744;
          color: white;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 400;
          white-space: nowrap;
          max-width: 260px;
          white-space: normal;
          z-index: 100;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          line-height: 1.4;
        }
        .info-tip:hover::before {
          content: '';
          position: absolute;
          bottom: calc(100% + 2px);
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: #1a2744;
          z-index: 101;
        }

        /* Wait action badge */
        .wait-badge {
          display: inline-block;
          padding: 2px 8px;
          background: rgba(255, 193, 7, 0.15);
          color: #b8860b;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }
      `;
    },

    render() {
      const ui = State.shadowRoot.querySelector('#autoclicus-ui');
      if (!ui) return;

      // Apply state classes for border glow
      ui.classList.toggle('state-recording', State.isRecording);
      ui.classList.toggle('state-playing', State.isPlaying);

      // Minimized mode: compact strip with progress bar
      if (State.isMinimized) {
        const pct = (State.isPlaying && State.loopCount > 0) ? Math.round((State.currentLoop / State.loopCount) * 100) : 0;
        const statusText = State.isPlaying
          ? `${State.currentLoop}/${State.loopCount}`
          : State.isRecording ? 'REC' : 'Prêt';
        const stripClass = State.isPlaying ? 'playing' : State.isRecording ? 'recording-state' : '';
        const fillClass = State.isRecording ? 'recording' : '';

        const miniModeName = State.isPlaying
          ? (State.scenario.configured ? '📋 Scénario' : '▶ Lecture')
          : State.isRecording
            ? (State.scenario.isGuided ? '⏺ Guidé' : '⏺ REC')
            : (State.scenario.configured ? '📋 Prêt' : '');
        const hasActions = State.recordedActions.length > 0 || State.scenario.configured;

        safeHTML(ui, `
          <div class="minimized-strip ${stripClass}" id="mini-strip">
            <img class="mini-avatar" src="${Config.emmaAvatar}" alt="E">
            <span class="mini-label">${miniModeName || 'AutoClicUS'}</span>
            <div class="mini-actions">
              <button class="mini-btn ${State.isRecording ? 'rec-active' : ''}" id="mini-rec" title="Enregistrer" ${State.isPlaying ? 'disabled' : ''}>⏺</button>
              <button class="mini-btn ${State.isPlaying ? 'play-active' : ''}" id="mini-play" title="Lancer" ${!hasActions || State.isRecording ? 'disabled' : ''}>▶</button>
              <button class="mini-btn" id="mini-stop" title="Stop" ${!State.isPlaying && !State.isRecording ? 'disabled' : ''}>⬛</button>
            </div>
            <div class="mini-progress-wrap">
              <div class="mini-progress-fill ${fillClass}" style="width:${pct}%"></div>
            </div>
            <span class="mini-status">${statusText}</span>
            <button class="mini-expand" id="btn-expand" title="Agrandir">+</button>
          </div>
        `);

        // Expand button handler
        const expandBtn = ui.querySelector('#btn-expand');
        if (expandBtn) {
          expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            State.isMinimized = false;
            this.render();
          });
        }
        // Mini action button handlers
        const miniRec = ui.querySelector('#mini-rec');
        const miniPlay = ui.querySelector('#mini-play');
        const miniStop = ui.querySelector('#mini-stop');
        if (miniRec) miniRec.addEventListener('click', (e) => { e.stopPropagation(); State.isRecording ? Recorder.stop() : Recorder.start(); });
        if (miniPlay) miniPlay.addEventListener('click', (e) => { e.stopPropagation(); if (!State.isPlaying) Player.start(); });
        if (miniStop) miniStop.addEventListener('click', (e) => { e.stopPropagation(); if (State.isPlaying) Player.stop(); else if (State.isRecording) Recorder.stop(); });
        // Double-click on strip label expands (single click reserved for actions)
        const miniLabel = ui.querySelector('.mini-label');
        if (miniLabel) {
          miniLabel.addEventListener('dblclick', () => { State.isMinimized = false; this.render(); });
        }
        this.attachDragHandle();
        return;
      }

      safeHTML(ui, `
        ${this.renderHeader()}
        ${this.renderRateBar()}
        ${this.renderActionBar()}
        <div class="flash-area"></div>
        ${this.renderTabs()}
        ${this.renderContent()}
        ${this.renderBottomStrip()}
        <div class="resize-edge" data-dir="n"></div>
        <div class="resize-edge" data-dir="s"></div>
        <div class="resize-edge" data-dir="w"></div>
        <div class="resize-edge" data-dir="e"></div>
        <div class="resize-edge" data-dir="nw"></div>
        <div class="resize-edge" data-dir="ne"></div>
        <div class="resize-edge" data-dir="sw"></div>
        <div class="resize-edge" data-dir="se"></div>
      `);

      this.attachEventListeners();
      this.attachDragHandle();
      this.attachResizeHandles();
      this.applyVibeTheme();
    },

    // P1: Lightweight update during playback — skip full re-render + re-attach
    updatePlaybackDisplay() {
      const root = State.shadowRoot;
      if (!root) return;

      // Update minimized strip if minimized
      if (State.isMinimized) {
        this.updateMinimizedProgress();
        return;
      }

      // Update bottom strip (step/loop counter)
      const strip = root.querySelector('.bottom-strip');
      if (strip && State.isPlaying) {
        const step = State.currentStep + 1;
        const total = State.recordedActions.length;
        safeHTML(strip, `<span class="status-icon">🟢</span> Lecture ${step}/${total} · Boucle ${State.currentLoop}/${State.loopCount}`);
      }

      // Update exec stats panel
      const existingStats = root.querySelector('.exec-stats');
      if (State.isPlaying) {
        const statsHTML = this.renderExecStats();
        const temp = document.createElement('div');
        safeHTML(temp, statsHTML);
        if (existingStats) {
          existingStats.replaceWith(...temp.childNodes);
        } else {
          // Insert after rate-bar if not present
          const rateBar = root.querySelector('.rate-bar');
          if (rateBar) {
            rateBar.after(...temp.childNodes);
          }
        }
      }

      // Update progress bar fill if on record tab
      const progressFill = root.querySelector('.progress-fill-geek');
      if (progressFill) {
        const pct = State.recordedActions.length > 0
          ? Math.round(((State.currentStep + 1) / State.recordedActions.length) * 100)
          : 0;
        progressFill.style.width = `${pct}%`;
      }

      // Update step text
      const stepText = root.querySelector('.playback-step-text');
      if (stepText) {
        stepText.textContent = `Étape ${State.currentStep + 1} / ${State.recordedActions.length} · Boucle ${State.currentLoop} / ${State.loopCount}`;
      }
    },

    renderHeader() {
      const now = new Date();
      const time = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0') + ':' + String(now.getSeconds()).padStart(2,'0');

      let countdownHTML = '';
      if (State.countdownEnd) {
        const remaining = State.countdownEnd - now.getTime();
        if (remaining > 0) {
          const hrs = Math.floor(remaining / 3600000);
          const mins = Math.floor((remaining % 3600000) / 60000);
          const secs = Math.floor((remaining % 60000) / 1000);
          const display = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
          countdownHTML = `<div class="header-countdown">⏱ ${display}</div>`;
        } else {
          countdownHTML = `<div class="header-countdown expired">⏱ 00:00:00 TERMINÉ</div>`;
        }
      }

      return `
        <div class="header">
          <div class="header-avatar">
            <img src="${Config.emmaAvatar}" alt="Emma" width="40" height="40"
                 style="border-radius: 50%; border: 2px solid rgba(255,255,255,0.6); object-fit: cover;">
          </div>
          <div class="header-info">
            <div class="header-title">Emma <span class="header-ai-badge">JSLAI</span></div>
            <div class="header-subtitle">${State.vibeTheme === 'plage' ? 'Assistante · Taux de plage 🌊' : State.vibeTheme === 'ski' ? 'Assistante · Taux de descente ⛷️' : 'Assistante · Taux de change'}</div>
          </div>
          <div class="header-right">
            <div class="header-clock">${time}</div>
            ${countdownHTML}
            <div class="header-ai-status"><span class="ai-dot"></span> En ligne</div>
          </div>
          <button class="header-minimize" id="btn-minimize" title="Réduire">&#8722;</button>
        </div>
      `;
    },

    _rateFieldStyle(value, isActive) {
      const v = parseFloat(value);
      const filled = value && !isNaN(v) && v > 0;
      if (filled) {
        // Valid: light green
        return isActive
          ? 'border: 2px solid #00874e; background: rgba(0,135,78,0.08); color: #00874e; font-weight: 600;'
          : 'border: 1px solid rgba(0,135,78,0.4); background: rgba(0,135,78,0.04); color: #1a1a1a;';
      } else {
        // Empty/missing: light grey
        return isActive
          ? 'border: 2px dashed #bbb; background: rgba(0,0,0,0.02); color: #999;'
          : 'border: 1px solid #e0e0e0; background: rgba(0,0,0,0.015); color: #bbb;';
      }
    },

    _rateLabelStyle(value, isActive) {
      const v = parseFloat(value);
      const filled = value && !isNaN(v) && v > 0;
      if (filled) {
        return isActive
          ? 'color: #00874e; font-weight: 700;'
          : 'color: #00874e; font-weight: 500; opacity: 0.7;';
      } else {
        return isActive
          ? 'color: #999; font-weight: 600;'
          : 'color: #bbb; font-weight: 400;';
      }
    },

    renderRateBar() {
      const isAcheteur = State.scenario.rateModel === 'acheteur';
      const buyerFilled = State.tauxAcheteur && !isNaN(parseFloat(State.tauxAcheteur)) && parseFloat(State.tauxAcheteur) > 0;
      const sellerFilled = State.tauxVendeur && !isNaN(parseFloat(State.tauxVendeur)) && parseFloat(State.tauxVendeur) > 0;
      const loopsFilled = State.loopCount && State.loopCount >= 1;

      const buyerIcon = buyerFilled ? '✅' : (isAcheteur ? '⬜' : '');
      const sellerIcon = sellerFilled ? '✅' : (!isAcheteur ? '⬜' : '');
      const loopsIcon = loopsFilled ? '✅' : '⬜';

      return `
        <div class="rate-bar">
          <div class="rate-field">
            <label style="${this._rateLabelStyle(State.tauxAcheteur, isAcheteur)}">${buyerIcon} Taux acheteur${isAcheteur ? ' ●' : ''}</label>
            <input type="text" id="rate-buyer" placeholder="ex: 1.3567" value="${State.tauxAcheteur}" style="${this._rateFieldStyle(State.tauxAcheteur, isAcheteur)} font-family: 'SF Mono', monospace; font-size: 13px;">
          </div>
          <div class="rate-field">
            <label style="${this._rateLabelStyle(State.tauxVendeur, !isAcheteur)}">${sellerIcon} Taux vendeur${!isAcheteur ? ' ●' : ''}</label>
            <input type="text" id="rate-seller" placeholder="ex: 1.3567" value="${State.tauxVendeur}" style="${this._rateFieldStyle(State.tauxVendeur, !isAcheteur)} font-family: 'SF Mono', monospace; font-size: 13px;">
          </div>
          <div class="rate-field" style="flex: 0 0 auto;">
            <label style="${loopsFilled ? 'color: #00874e; font-weight: 600;' : 'color: #999;'}">${loopsIcon} Boucles</label>
            <input type="number" id="loops" min="1" max="${Config.limits.maxLoops}" value="${State.loopCount}" style="width: 70px; font-family: 'SF Mono', monospace; font-size: 13px; ${loopsFilled ? 'border: 1px solid rgba(0,135,78,0.4); background: rgba(0,135,78,0.04);' : 'border: 1px solid #e0e0e0; background: rgba(0,0,0,0.015);'}">
          </div>
          <div class="rate-field" style="flex: 0 0 auto;">
            <label style="color: #00874e; font-weight: 500;">✅ Fin à</label>
            <input type="time" id="countdown-time" value="${State.countdownEnd ? new Date(State.countdownEnd).toTimeString().substring(0,5) : '16:00'}" style="font-family: 'SF Mono', monospace; font-size: 13px; border: 1px solid rgba(0,135,78,0.4); background: rgba(0,135,78,0.04);">
          </div>
        </div>
        ${State.isPlaying ? this.renderExecStats() : ''}
      `;
    },

    // Live update rate field visuals without full re-render (keeps focus)
    _updateRateFieldVisuals(root) {
      const isAcheteur = State.scenario.rateModel === 'acheteur';
      const buyerInput = root.querySelector('#rate-buyer');
      const sellerInput = root.querySelector('#rate-seller');
      if (buyerInput) {
        const buyerFilled = State.tauxAcheteur && !isNaN(parseFloat(State.tauxAcheteur)) && parseFloat(State.tauxAcheteur) > 0;
        buyerInput.style.cssText = this._rateFieldStyle(State.tauxAcheteur, isAcheteur) + 'font-family: "SF Mono", monospace; font-size: 13px;';
        const buyerLabel = buyerInput.parentElement.querySelector('label');
        if (buyerLabel) {
          buyerLabel.style.cssText = this._rateLabelStyle(State.tauxAcheteur, isAcheteur);
          buyerLabel.textContent = (buyerFilled ? '✅' : (isAcheteur ? '⬜' : '')) + ' Taux acheteur' + (isAcheteur ? ' ●' : '');
        }
      }
      if (sellerInput) {
        const sellerFilled = State.tauxVendeur && !isNaN(parseFloat(State.tauxVendeur)) && parseFloat(State.tauxVendeur) > 0;
        sellerInput.style.cssText = this._rateFieldStyle(State.tauxVendeur, !isAcheteur) + 'font-family: "SF Mono", monospace; font-size: 13px;';
        const sellerLabel = sellerInput.parentElement.querySelector('label');
        if (sellerLabel) {
          sellerLabel.style.cssText = this._rateLabelStyle(State.tauxVendeur, !isAcheteur);
          sellerLabel.textContent = (sellerFilled ? '✅' : (!isAcheteur ? '⬜' : '')) + ' Taux vendeur' + (!isAcheteur ? ' ●' : '');
        }
      }
    },

    renderActionBar() {
      // Determine active mode/scenario name
      let modeBadge = '';
      let modeName = '';
      if (State.isPlaying) {
        modeBadge = '<span class="mode-badge playing">▶ Lecture</span>';
        modeName = State.scenario.configured ? '📋 ' + Scenario.defaultWorkflow.name : State.recordedActions.length + ' actions enregistrées';
      } else if (State.isRecording) {
        if (State.scenario.isGuided) {
          const step = Scenario.defaultWorkflow.steps.find(s => s.id === State.scenario.guidedStep);
          modeBadge = '<span class="mode-badge recording">⏺ Enregistrement guidé</span>';
          modeName = step ? '📋 ' + step.name : 'Scénario';
        } else {
          modeBadge = '<span class="mode-badge recording">⏺ Enregistrement libre</span>';
          modeName = State.recordedActions.length + ' actions';
        }
      } else if (State.scenario.configured) {
        modeBadge = '<span class="mode-badge scenario">📋 Scénario prêt</span>';
        modeName = Scenario.defaultWorkflow.name;
      } else if (State.recordedActions.length > 0) {
        modeBadge = '<span class="mode-badge idle">⏸ En attente</span>';
        modeName = State.recordedActions.length + ' actions enregistrées';
      } else {
        modeBadge = '<span class="mode-badge idle">○ Aucun</span>';
        modeName = 'Aucun scénario chargé';
      }

      const hasActions = State.recordedActions.length > 0 || State.scenario.configured;

      return `
        <div class="action-bar">
          <div class="action-bar-buttons">
            <button class="action-bar-btn rec ${State.isRecording ? 'active' : ''}" id="ab-rec" title="Enregistrer (${State.settings.shortcuts.record})" ${State.isPlaying ? 'disabled' : ''}>
              ⏺ REC
            </button>
            <button class="action-bar-btn stop" id="ab-stop-rec" title="Arrêter enreg." ${!State.isRecording ? 'disabled' : ''}>
              ⬛
            </button>
          </div>
          <div class="action-bar-divider"></div>
          <div class="action-bar-buttons">
            <button class="action-bar-btn play ${State.isPlaying ? 'active' : ''}" id="ab-play" title="Lancer (${State.settings.shortcuts.play})" ${!hasActions || State.isRecording ? 'disabled' : ''}>
              ▶ PLAY
            </button>
            <button class="action-bar-btn pause" id="ab-pause" title="Pause (${State.settings.shortcuts.pause})" ${!State.isPlaying ? 'disabled' : ''}>
              ${State.isPaused ? '▶' : '⏸'}
            </button>
            <button class="action-bar-btn stop" id="ab-stop-play" title="Stop (${State.settings.shortcuts.stop})" ${!State.isPlaying ? 'disabled' : ''}>
              ⬛ STOP
            </button>
          </div>
          <div class="action-bar-divider"></div>
          <div class="action-bar-mode">
            ${modeBadge}
            <span class="action-bar-mode-name">${modeName}</span>
          </div>
        </div>
      `;
    },

    renderExecStats() {
      const done = State.currentLoop;
      const total = State.loopCount;
      const remaining = total - done;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;

      // Calculate avg loop time from completed loops
      const avgMs = State.loopTimestamps.length > 0
        ? State.loopTimestamps.reduce((a, b) => a + b, 0) / State.loopTimestamps.length
        : 0;

      const etaMs = avgMs * remaining;
      const etaFinish = avgMs > 0 ? new Date(Date.now() + etaMs) : null;

      // Check if we'll finish before countdown
      let deadlineStatus = '';
      if (State.countdownEnd && etaFinish) {
        if (etaFinish.getTime() <= State.countdownEnd) {
          const margin = State.countdownEnd - etaFinish.getTime();
          const marginMins = Math.floor(margin / 60000);
          deadlineStatus = `<span style="color: ${Config.theme.success};">✅ Finira avec ~${marginMins} min d'avance</span>`;
        } else {
          const over = etaFinish.getTime() - State.countdownEnd;
          const overMins = Math.ceil(over / 60000);
          deadlineStatus = `<span style="color: ${Config.theme.error};">⚠️ Dépassera de ~${overMins} min</span>`;
        }
      }

      const formatDuration = (ms) => {
        if (ms <= 0) return '--';
        const s = Math.floor(ms / 1000);
        if (s < 60) return `${s}s`;
        const m = Math.floor(s / 60);
        const rs = s % 60;
        if (m < 60) return `${m}m${String(rs).padStart(2, '0')}s`;
        const h = Math.floor(m / 60);
        const rm = m % 60;
        return `${h}h${String(rm).padStart(2, '0')}m`;
      };

      return `
        <div class="exec-stats">
          <div class="exec-stats-row">
            <div class="exec-stat">
              <span class="exec-stat-value">${remaining}</span>
              <span class="exec-stat-label">/ ${total} restant${remaining !== 1 ? 's' : ''}</span>
            </div>
            <div class="exec-stat">
              <span class="exec-stat-value">${avgMs > 0 ? formatDuration(avgMs) : '--'}</span>
              <span class="exec-stat-label">/ boucle</span>
            </div>
            <div class="exec-stat">
              <span class="exec-stat-value">${etaMs > 0 ? formatDuration(etaMs) : '--'}</span>
              <span class="exec-stat-label">restant</span>
            </div>
            <div class="exec-stat">
              <span class="exec-stat-value">${etaFinish ? etaFinish.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' }) : '--'}</span>
              <span class="exec-stat-label">fin est.</span>
            </div>
          </div>
          <div class="exec-stats-progress">
            <div class="exec-stats-fill" style="width: ${pct}%"></div>
          </div>
          ${deadlineStatus ? `<div style="text-align: center; font-size: 11px; padding: 2px 0;">${deadlineStatus}</div>` : ''}
        </div>
      `;
    },

    renderBottomStrip() {
      let stripClass = 'bottom-strip';
      let statusText = '';
      let statusIcon = '';
      let statusLabel = '';

      if (State.isRecording) {
        stripClass += ' recording';
        statusIcon = '🔴';
        statusLabel = 'REC';
        if (State.scenario.isGuided) {
          const step = Scenario.defaultWorkflow.steps.find(s => s.id === State.scenario.guidedStep);
          statusText = `Enregistrement guidé — ${step ? step.name : 'étape'}`;
        } else {
          statusText = `Enregistrement libre — ${State.recordedActions.length} action${State.recordedActions.length !== 1 ? 's' : ''}`;
        }
      } else if (State.isPlaying) {
        stripClass += ' playing';
        statusIcon = '▶';
        statusLabel = 'PLAY';
        const step = State.currentStep + 1;
        const total = State.recordedActions.length;
        statusText = `Lecture ${step}/${total} · Boucle ${State.currentLoop}/${State.loopCount}`;
      } else if (State.isPaused) {
        statusIcon = '⏸';
        statusLabel = 'PAUSE';
        statusText = 'Lecture en pause';
      } else {
        statusIcon = '✅';
        statusLabel = 'PRÊT';
        const parts = [];
        if (State.scenario.configured) parts.push('📋 Scénario prêt');
        if (State.recordedActions.length > 0) parts.push(`${State.recordedActions.length} actions`);
        statusText = parts.length > 0 ? parts.join(' · ') : 'Aucune action chargée';
      }

      return `
        <div class="${stripClass}">
          <span class="status-icon">${statusIcon}</span>
          <strong style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 4px;">${statusLabel}</strong>
          ${statusText}
        </div>
      `;
    },

    renderTabs() {
      const tabs = [
        { id: 'scenario', label: '📋 Scénario' },
        { id: 'record', label: '⏺ Enreg.' },
        { id: 'edit', label: '✏️ Éditer' },
        { id: 'conditions', label: '🔀 Cond.' },
        { id: 'audit', label: '📊 Audit' },
        { id: 'stats', label: '📈 Stats' },
        { id: 'save', label: '💾 Sauv.' },
        { id: 'settings', label: '⚙️ Régl.' },
        { id: 'help', label: '❓ Aide' }
      ];

      return `
        <div class="tabs">
          ${tabs.map(tab => `
            <button class="tab ${State.currentTab === tab.id ? 'active' : ''}" data-tab="${tab.id}">
              ${tab.label}
            </button>
          `).join('')}
        </div>
      `;
    },

    renderContent() {
      switch (State.currentTab) {
        case 'scenario': return this.renderScenarioTab();
        case 'record': return this.renderRecordTab();
        case 'edit': return this.renderEditTab();
        case 'conditions': return this.renderConditionsTab();
        case 'audit': return this.renderAuditTab();
        case 'stats': return this.renderStatsTab();
        case 'save': return this.renderSaveTab();
        case 'settings': return this.renderSettingsTab();
        case 'help': return this.renderHelpTab();
        default: return '';
      }
    },

    renderScenarioTab() {
      const wf = Scenario.defaultWorkflow;
      const allReady = Scenario.isAllRequiredConfigured();
      const requiredCount = wf.steps.filter(s => s.recordRequired).length;
      const configuredCount = wf.steps.filter(s => s.recordRequired && State.scenario.stepActions[s.id]?.length > 0).length;

      const renderStepBadge = (step) => {
        const status = Scenario.getStepStatus(step.id);
        switch (status) {
          case 'configured': return '<span class="scenario-step-badge scenario-badge-configured">&#10003;</span>';
          case 'auto': return '<span class="scenario-step-badge scenario-badge-auto">&#9881;</span>';
          case 'optional': return '<span class="scenario-step-badge scenario-badge-optional">?</span>';
          default: return '<span class="scenario-step-badge scenario-badge-unconfigured">&#9744;</span>';
        }
      };

      const renderStepAction = (step) => {
        const status = Scenario.getStepStatus(step.id);
        if (step.type === 'marker') return '';
        if (step.auto && !step.optional) return '<span style="font-size:11px;color:#1976d2;">Automatique</span>';
        if (status === 'configured') return `<button class="btn-configure reconfigure" data-scenario-configure="${step.id}">Reconfigurer</button>`;
        if (step.optional && status === 'optional') return `<button class="btn-configure" style="background:#f57c00;" data-scenario-configure="${step.id}">Configurer (opt.)</button>`;
        if (step.recordRequired) return `<button class="btn-configure" data-scenario-configure="${step.id}">Configurer</button>`;
        return '';
      };

      const renderStepDetail = (step) => {
        const status = Scenario.getStepStatus(step.id);
        if (step.type === 'wait') return `Délai: ${step.delay}ms`;
        if (step.type === 'paste_rate') return State.scenario.rateModel === 'vendeur' ? 'Colle taux vendeur' : 'Colle taux acheteur';
        if (status === 'configured') {
          const act = State.scenario.stepActions[step.id]?.[0];
          return act?.fingerprint?.selector ? `&#10003; ${act.fingerprint.selector.substring(0, 40)}` : '&#10003; Configuré';
        }
        return step.instruction || '';
      };

      let setupSteps = '';
      let loopSteps = '';
      let inLoop = false;

      for (const step of wf.steps) {
        if (step.type === 'marker') {
          inLoop = true;
          setupSteps += `
            <div class="scenario-separator">Boucle (x${State.loopCount})</div>
          `;
          continue;
        }

        const row = `
          <div class="scenario-step ${step.type === 'marker' ? 'is-marker' : ''}">
            ${renderStepBadge(step)}
            <div class="scenario-step-info">
              <div class="scenario-step-name">${step.name}</div>
              <div class="scenario-step-detail">${renderStepDetail(step)}</div>
            </div>
            <div class="scenario-step-action">
              ${renderStepAction(step)}
            </div>
          </div>
        `;

        if (inLoop) {
          loopSteps += row;
        } else {
          setupSteps += row;
        }
      }

      return `
        <div class="content">
          <p style="font-size:12px;color:${Config.theme.textSecondary};margin:0 0 8px 0;text-align:center;">
            Vous pouvez aussi enregistrer librement via l'onglet <strong>Enreg.</strong>
          </p>

          <div class="card">
            <div class="card-header">${wf.name}</div>
            <p style="font-size:13px;color:${Config.theme.textSecondary};margin:0 0 12px 0;">
              ${wf.description}
            </p>

            <div style="margin-bottom:12px;font-size:13px;">
              Progression: <strong>${configuredCount}/${requiredCount}</strong> étapes configurées
              <div style="height:4px;background:#e9ecef;border-radius:2px;margin-top:6px;">
                <div style="height:100%;width:${requiredCount > 0 ? (configuredCount/requiredCount)*100 : 0}%;background:${Config.theme.primary};border-radius:2px;transition:width 0.3s;"></div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Quel taux coller?</div>
            <div class="scenario-toggle-group">
              <button class="scenario-toggle-btn ${State.scenario.rateModel === 'acheteur' ? 'active' : ''}" data-scenario-model="acheteur">
                Taux acheteur
              </button>
              <button class="scenario-toggle-btn ${State.scenario.rateModel === 'vendeur' ? 'active' : ''}" data-scenario-model="vendeur">
                Taux vendeur
              </button>
            </div>
            <div style="font-size:11px; color:${Config.theme.textSecondary}; margin-top:6px; padding:0 4px;">
              Le taux sélectionné sera collé dans le champ de saisie à chaque boucle.
              Saisissez la valeur dans le champ correspondant ci-dessus.
            </div>
          </div>

          <div class="card">
            <div class="card-header">Étapes</div>
            ${setupSteps}
            ${loopSteps}
          </div>

          <div class="btn-group" style="margin-top:12px;">
            <button class="btn btn-primary" id="btn-launch-scenario" ${!allReady || State.isPlaying ? 'disabled' : ''}>
              ${allReady ? '&#9654; Lancer le scénario' : '&#9744; Configurer les étapes d\'abord'}
            </button>
            <button class="btn btn-secondary" id="btn-reset-scenario">
              Réinitialiser
            </button>
          </div>

        </div>
      `;
    },

    renderRecordTab() {
      const progress = State.recordedActions.length > 0
        ? ((State.currentStep + 1) / State.recordedActions.length) * 100
        : 0;

      return `
        <div class="content">
          <div class="card" style="border-left: 3px solid #dc3545;">
            <div class="card-header" style="color: #dc3545;">⏺ Enregistrement</div>

            <div class="btn-group">
              <button class="btn btn-primary tooltip-wrap" data-tip="Démarre l'enregistrement de vos clics" id="btn-record" ${State.isRecording ? 'disabled' : ''}
                style="${State.isRecording ? 'animation: ai-recording-pulse 1.5s ease-in-out infinite; background: linear-gradient(135deg, #dc3545, #ff6b6b);' : ''}">
                ${State.isRecording ? '🔴 Enregistrement...' : `⏺ Enregistrer (${State.settings.shortcuts.record})`}
              </button>
              <button class="btn btn-danger tooltip-wrap" data-tip="Arrête l'enregistrement" id="btn-stop-record" ${!State.isRecording ? 'disabled' : ''}>
                ⬛ Arrêter
              </button>
            </div>
            ${State.isRecording ? `
              <div class="progress-bar-geek">
                <div class="progress-fill-geek recording" style="width: 100%"></div>
              </div>
              <div style="text-align: center; font-size: 13px; color: #ff6b6b;">
                ⏺ Enregistrement... ${State.recordedActions.length} action${State.recordedActions.length !== 1 ? 's' : ''}
              </div>
            ` : `<div style="font-size: 11px; color: ${Config.theme.textSecondary}; margin-top: 4px;">
                Cliquez sur les éléments de la page pour les enregistrer.
              </div>`}
          </div>

          <div class="card" style="border-left: 3px solid #198754;">
            <div class="card-header" style="color: #198754;">▶ Lecture</div>

            <div class="checkbox-group">
              <input type="checkbox" id="dry-run" ${State.dryRun ? 'checked' : ''}>
              <label for="dry-run">🧪 Mode simulation (ne modifie rien)</label>
            </div>

            <div class="btn-group">
              <button class="btn btn-primary tooltip-wrap" data-tip="Lance la lecture des actions" id="btn-play" ${State.isPlaying || State.recordedActions.length === 0 ? 'disabled' : ''}
                style="background: linear-gradient(135deg, #198754, #20c997);">
                ▶ Lire (${State.settings.shortcuts.play})
              </button>
              <button class="btn btn-warning tooltip-wrap" data-tip="Met en pause la lecture" id="btn-pause" ${!State.isPlaying || State.isPaused ? 'disabled' : ''}>
                ⏸ Pause (${State.settings.shortcuts.pause})
              </button>
              <button class="btn btn-danger tooltip-wrap" data-tip="Arrête la lecture" id="btn-stop" ${!State.isPlaying ? 'disabled' : ''}>
                ⬛ Stop (${State.settings.shortcuts.stop})
              </button>
            </div>

            ${State.isPlaying ? `
              <div class="progress-bar-geek">
                <div class="progress-fill-geek playing" style="width: ${progress}%"></div>
              </div>
              <div class="playback-step-text" style="text-align: center; font-size: 13px; color: ${Config.theme.textSecondary};">
                Étape ${State.currentStep + 1} / ${State.recordedActions.length} · Boucle ${State.currentLoop} / ${State.loopCount}
              </div>
            ` : `<div style="font-size: 11px; color: ${Config.theme.textSecondary}; margin-top: 4px;">
                ${State.recordedActions.length > 0 ? `✅ ${State.recordedActions.length} actions prêtes à lire.` : '⚠️ Aucune action enregistrée.'}
              </div>`}
          </div>

          <div class="card">
            <div class="card-header">⚡ Paramètres de lecture</div>

            <div class="input-group">
              <label>🏎️ Vitesse (${State.speed}x)</label>
              <input type="range" id="speed" min="0.25" max="8" step="0.25" value="${State.speed}">
            </div>

            <div class="input-group">
              <label>⏱️ Limite de temps (secondes, 0 = aucune)</label>
              <input type="number" id="time-limit" min="0" value="${(State.timeLimit || 0) / 1000}">
            </div>
          </div>

          ${this.renderPreflightStatus()}
        </div>
      `;
    },

    renderPreflightStatus() {
      const preflights = State.conditions.filter(c => c.preflight);

      if (preflights.length === 0) {
        return `
          <div class="card">
            <div class="card-header">Vérifications préalables</div>
            <div style="text-align: center; padding: 20px; color: ${Config.theme.textSecondary};">
              Aucune vérification configurée
            </div>
          </div>
        `;
      }

      return `
        <div class="card">
          <div class="card-header">Vérifications préalables</div>
          ${preflights.map(condition => {
            const passed = Conditions.check(condition);
            return `
              <div style="display: flex; align-items: center; gap: 10px; padding: 8px 0;">
                <span style="font-size: 18px;">${passed ? '✅' : '❌'}</span>
                <span style="flex: 1;">${condition.name}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    },

    renderConditionsTab() {
      const typeLabels = {
        visible: 'Élément visible',
        hidden: 'Élément caché',
        hasText: 'Contient le texte',
        notHasText: 'Ne contient pas le texte',
        hasColor: 'A la couleur',
        hasClass: 'A la classe CSS',
        exists: 'Élément existe',
        urlContains: 'URL contient',
        count: 'Nombre d\'éléments',
        value: 'Valeur du champ',
        checked: 'Case cochée',
        enabled: 'Élément activé'
      };

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Conditions</div>
            <div style="font-size: 12px; color: ${Config.theme.textSecondary}; margin-bottom: 12px;">
              Les conditions vérifient l'état de la page avant ou pendant l'exécution.
            </div>
            <div class="btn-group">
              <button class="btn btn-primary btn-small tooltip-wrap" data-tip="Ajouter une nouvelle condition" id="add-condition">+ Ajouter</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Vérifie toutes les conditions maintenant" id="test-conditions">🧪 Tester toutes</button>
            </div>
          </div>

          ${State.showConditionForm ? `
            <div class="inline-form">
              <div style="font-weight: 600; margin-bottom: 12px;">Nouvelle condition</div>
              <div class="form-row">
                <div class="form-field">
                  <label>Nom (description)</label>
                  <input type="text" id="form-cond-name" placeholder="Ex: Bouton Appliquer visible">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Type de vérification</label>
                  <select id="form-cond-type">
                    ${Conditions.types.map(t => `<option value="${t}">${typeLabels[t] || t}</option>`).join('')}
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field" style="flex: 2;">
                  <label>Sélecteur CSS</label>
                  <div style="display: flex; gap: 6px;">
                    <input type="text" id="form-cond-selector" placeholder="Ex: #btn-appliquer, .rate-input" style="flex: 1;">
                    <button class="btn btn-secondary btn-small" id="pick-element-cond" title="Cliquer sur un élément de la page">🎯 Cibler</button>
                  </div>
                  ${State.pickedElement ? `<div class="picker-result">${State.pickedElement}</div>` : ''}
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Valeur (optionnel)</label>
                  <input type="text" id="form-cond-value" placeholder="Dépend du type choisi">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label class="checkbox-group" style="margin: 0;">
                    <input type="checkbox" id="form-cond-preflight">
                    <span>Vérification préalable (avant exécution)</span>
                  </label>
                </div>
              </div>
              <div class="form-actions">
                <button class="btn btn-secondary btn-small" id="cancel-condition-form">Annuler</button>
                <button class="btn btn-primary btn-small" id="submit-condition-form">Ajouter</button>
              </div>
            </div>
          ` : ''}

          ${State.conditions.length === 0 && !State.showConditionForm ? `
            <div class="empty-state">
              <div class="empty-state-icon">🎯</div>
              <div>Aucune condition configurée</div>
              <div style="font-size: 12px; margin-top: 8px; color: ${Config.theme.textSecondary};">
                Les conditions permettent de vérifier que la page est prête avant d'exécuter les actions
              </div>
            </div>
          ` : `
            <div class="condition-list">
              ${State.conditions.map((condition, index) => {
                const live = Conditions.check(condition);
                return `
                  <div class="condition-item ${condition.preflight ? 'preflight' : ''}">
                    <div class="condition-header">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 16px;">${live ? '✅' : '❌'}</span>
                        <div class="condition-name">
                          ${condition.preflight ? '🔒 ' : ''}${condition.name}
                        </div>
                      </div>
                      <button class="action-btn-mini danger" data-condition-index="${index}">×</button>
                    </div>
                    <div class="condition-details">
                      ${typeLabels[condition.type] || condition.type} · <code>${condition.selector}</code>
                      ${condition.value ? ` · "${condition.value}"` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      `;
    },

    renderEditTab() {
      const actionLabel = (action) => {
        if (action.type === 'prompt') return `📝 ${action.title || 'Saisie utilisateur'}`;
        if (action.type === 'confirm') return `❓ ${action.title || 'Confirmation'}`;
        if (action.type === 'wait') return `⏳ Attendre ${action.delay || 1000}ms`;
        if (action.type === 'navigate') return `🌐 ${action.url || ''}`;
        if (action.type === 'paste_buyer_rate') return `💵 Coller taux acheteur`;
        if (action.type === 'paste_seller_rate') return `💰 Coller taux vendeur`;
        const sel = action.fingerprint?.selector || '';
        const val = action.value ? ` = "${action.value.substring(0, 20)}"` : '';
        return `${action.eventType} → ${sel.substring(0, 30)}${val}`;
      };

      const actionTypeIcon = (action) => {
        const icons = { click: '👆', input: '⌨️', change: '🔄', keydown: '⌨️', prompt: '📝', confirm: '❓', wait: '⏳', navigate: '🌐', paste_buyer_rate: '💵', paste_seller_rate: '💰' };
        return icons[action.type] || icons[action.eventType] || '▶️';
      };

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Actions (${State.recordedActions.length})</div>
            <div class="btn-group" style="flex-wrap: wrap;">
              <button class="btn btn-primary btn-small tooltip-wrap" data-tip="Ajouter une saisie utilisateur" id="add-prompt">+ Saisie</button>
              <button class="btn btn-primary btn-small tooltip-wrap" data-tip="Ajouter une confirmation Oui/Non" id="add-confirm">+ Confirmation</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Ajouter une pause/attente" id="add-wait">+ Attente</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Ajouter une navigation URL" id="add-navigate">+ Navigation</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Coller le taux acheteur dans le champ actif" id="add-paste-buyer">💵 Taux acheteur</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Coller le taux vendeur dans le champ actif" id="add-paste-seller">💰 Taux vendeur</button>
              <button class="btn btn-danger btn-small tooltip-wrap" data-tip="Supprime toutes les actions" id="clear-actions">🗑️ Tout effacer</button>
            </div>
          </div>

          ${State.showPromptForm ? `
            <div class="inline-form">
              <div style="font-weight: 600; margin-bottom: 12px;">Nouvelle saisie utilisateur</div>
              <div class="form-row">
                <div class="form-field">
                  <label>Titre</label>
                  <input type="text" id="form-prompt-title" placeholder="Ex: Entrez le taux USD" value="Entrée requise">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Message affiché</label>
                  <input type="text" id="form-prompt-msg" placeholder="Ex: Veuillez entrer le taux de change">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Placeholder</label>
                  <input type="text" id="form-prompt-ph" placeholder="Ex: 1.4250">
                </div>
                <div class="form-field">
                  <label>Sélecteur cible (optionnel)</label>
                  <input type="text" id="form-prompt-sel" placeholder="Champ où injecter la valeur">
                </div>
              </div>
              <div class="form-actions">
                <button class="btn btn-secondary btn-small" id="cancel-prompt-form">Annuler</button>
                <button class="btn btn-primary btn-small" id="submit-prompt-form">Ajouter</button>
              </div>
            </div>
          ` : ''}

          ${State.showConfirmForm ? `
            <div class="inline-form">
              <div style="font-weight: 600; margin-bottom: 12px;">Nouvelle confirmation</div>
              <div class="form-row">
                <div class="form-field">
                  <label>Titre</label>
                  <input type="text" id="form-confirm-title" placeholder="Ex: Confirmer l'application" value="Confirmation">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Message</label>
                  <input type="text" id="form-confirm-msg" placeholder="Ex: Voulez-vous appliquer ce taux?">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Détails (optionnel)</label>
                  <input type="text" id="form-confirm-details" placeholder="Informations supplémentaires">
                </div>
              </div>
              <div class="form-actions">
                <button class="btn btn-secondary btn-small" id="cancel-confirm-form">Annuler</button>
                <button class="btn btn-primary btn-small" id="submit-confirm-form">Ajouter</button>
              </div>
            </div>
          ` : ''}

          ${State.recordedActions.length === 0 ? `
            <div class="empty-state">
              <div class="empty-state-icon">📝</div>
              <div>Aucune action enregistrée</div>
              <div style="font-size: 12px; margin-top: 8px; color: ${Config.theme.textSecondary};">
                Allez dans l'onglet "Enregistrer" et cliquez sur le bouton Enregistrer pour capturer vos actions
              </div>
            </div>
          ` : `
            <div class="action-list">
              ${State.recordedActions.map((action, index) => `
                <div class="action-item ${State.currentStep === index && State.isPlaying ? 'active' : ''} ${action.type === 'prompt' ? 'prompt' : ''} ${action.type === 'confirm' ? 'confirm' : ''}">
                  <div class="action-index">${index + 1}</div>
                  <div style="font-size: 16px;">${actionTypeIcon(action)}</div>
                  <div class="action-details" style="flex: 1; min-width: 0;">
                    <div style="font-size: 12px; color: ${Config.theme.textSecondary}; text-transform: uppercase; letter-spacing: 0.5px;">${action.type === 'action' ? action.eventType : action.type}</div>
                    <div style="font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                      ${State.editingActionIndex === index ? `
                        <input class="inline-edit" type="text" data-edit-index="${index}" value="${(action.value || action.title || '').replace(/"/g, '&quot;')}">
                      ` : actionLabel(action)}
                    </div>
                  </div>
                  <div class="action-btns">
                    ${index > 0 ? `<button class="action-btn-mini tooltip-wrap" data-tip="Monter" data-move-up="${index}">↑</button>` : ''}
                    ${index < State.recordedActions.length - 1 ? `<button class="action-btn-mini tooltip-wrap" data-tip="Descendre" data-move-down="${index}">↓</button>` : ''}
                    <button class="action-btn-mini tooltip-wrap" data-tip="Dupliquer" data-duplicate="${index}">⧉</button>
                    <button class="action-btn-mini tooltip-wrap" data-tip="Modifier" data-edit-action="${index}">✎</button>
                    <button class="action-btn-mini danger tooltip-wrap" data-tip="Supprimer" data-action-index="${index}">×</button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    },

    renderAuditTab() {
      const sessions = Audit.load();

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Journal d'audit</div>
            <div class="btn-group">
              <button class="btn btn-primary btn-small" id="export-audit-json">⬇️ Export JSON</button>
              <button class="btn btn-primary btn-small" id="export-audit-csv">⬇️ Export CSV</button>
              <button class="btn btn-danger btn-small" id="clear-audit">🗑️ Effacer</button>
            </div>
          </div>

          ${State.auditTrail.length === 0 && sessions.length === 0 ? `
            <div class="empty-state">
              <div class="empty-state-icon">📊</div>
              <div>Aucune entrée d'audit</div>
            </div>
          ` : `
            ${State.auditTrail.length > 0 ? `
              <div class="card">
                <div class="card-header">Session en cours</div>
                <div class="audit-log">
                  ${State.auditTrail.map(entry => `
                    <div class="audit-entry">
                      [${new Date(entry.timestamp).toLocaleTimeString()}]
                      ${entry.sequence}. ${entry.action} →
                      <span style="color: ${entry.result === 'success' ? Config.theme.success : Config.theme.error}">
                        ${entry.result}
                      </span>
                      (${entry.duration_ms}ms)
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${sessions.length > 0 ? `
              <div class="card">
                <div class="card-header">Sessions précédentes (${sessions.length})</div>
                ${sessions.slice(-5).reverse().map(session => `
                  <div style="padding: 10px; border: 1px solid ${Config.theme.border}; border-radius: 6px; margin-bottom: 8px;">
                    <div style="font-weight: 600; margin-bottom: 4px;">
                      Session ${session.sessionId.substring(0, 8)}
                    </div>
                    <div style="font-size: 12px; color: ${Config.theme.textSecondary};">
                      ${new Date(session.startTime).toLocaleString()} · ${session.entries.length} actions
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          `}
        </div>
      `;
    },

    renderStatsTab() {
      const totalActions = State.recordedActions.length;
      const estimatedTime = totalActions * (State.settings.delayBetweenActions / State.speed) / 1000;
      const loops = State.loopCount;

      return `
        <div class="content">
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">${totalActions}</div>
              <div class="stat-label">Actions</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${State.conditions.length}</div>
              <div class="stat-label">Conditions</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${loops}</div>
              <div class="stat-label">Boucles</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${(estimatedTime * loops).toFixed(1)}s</div>
              <div class="stat-label">Temps estimé</div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Estimation par vitesse</div>
            <table class="table">
              <thead>
                <tr>
                  <th>Vitesse</th>
                  <th>Temps / boucle</th>
                  <th>Temps total</th>
                </tr>
              </thead>
              <tbody>
                ${[0.25, 0.5, 1, 2, 4, 8].map(speed => {
                  const timePerLoop = totalActions * (1000 / speed) / 1000;
                  const totalTime = timePerLoop * loops;
                  return `
                    <tr>
                      <td>${speed}x</td>
                      <td>${timePerLoop.toFixed(1)}s</td>
                      <td>${totalTime.toFixed(1)}s</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          <div class="card">
            <div class="card-header">Système</div>
            <div style="font-size: 13px; color: ${Config.theme.textSecondary};">
              Version: ${Config.version}<br>
              User Agent: ${navigator.userAgent.substring(0, 50)}...<br>
              URL: ${window.location.href}
            </div>
          </div>
        </div>
      `;
    },

    renderSaveTab() {
      const hasActions = State.recordedActions.length > 0;
      const hasScenario = State.scenario.configured;

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">💾 Sauvegarde locale <span class="info-tip" data-info="Sauvegarde dans le navigateur (localStorage). Persiste entre les sessions sur ce même poste. Aucun fichier à gérer.">i</span></div>
            <div style="font-size: 11px; color: ${Config.theme.textSecondary}; margin-bottom: 8px;">
              ${hasActions || hasScenario
                ? '✅ ' + (hasActions ? State.recordedActions.length + ' actions' : '') + (hasActions && hasScenario ? ' + ' : '') + (hasScenario ? 'scénario configuré' : '') + ' en mémoire.'
                : '⚠️ Aucune action ni scénario à sauvegarder.'}
            </div>
            <div class="btn-group">
              <button class="btn btn-primary" id="save-local" ${!hasActions && !hasScenario ? 'disabled' : ''}>💾 Sauvegarder</button>
              <button class="btn btn-primary" id="load-local">📂 Charger</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">📁 Fichier JSON <span class="info-tip" data-info="Exportez en .json pour sauvegarder hors navigateur, partager avec un collègue ou transférer sur un autre poste.">i</span></div>
            <div class="btn-group">
              <button class="btn btn-secondary" id="export-json" ${!hasActions && !hasScenario ? 'disabled' : ''}>⬇️ Exporter .json</button>
            </div>
            <div class="input-group" style="margin-top: 8px;">
              <label>📤 Importer un fichier</label>
              <input type="file" id="import-json" accept=".json">
            </div>
          </div>

          <div class="card" style="border: 1px solid rgba(0,135,78,0.25);">
            <div class="card-header">📂 Dossier local <span class="info-tip" data-info="Choisissez un dossier (ex: C:\\autoclicus) pour voir et charger vos fichiers .json sauvegardés.">i</span></div>
            ${FileManager.dirHandle ? `
              <div class="file-browser-dir" title="${FileManager.dirHandle.name}">📁 ${FileManager.dirHandle.name}</div>
              ${FileManager.files.length > 0 ? `
                <div class="file-browser">
                  ${FileManager.files.map((f, i) => `
                    <div class="file-item" data-file-idx="${i}">
                      <span class="file-item-icon">📄</span>
                      <span class="file-item-name" title="${f.name}">${f.name}</span>
                      <span class="file-item-meta">${FileManager.formatSize(f.size)}<br>${FileManager.formatDate(f.lastModified)}</span>
                    </div>
                  `).join('')}
                </div>
              ` : `
                <div class="file-browser-empty">Aucun fichier .json trouvé</div>
              `}
              <div class="btn-group" style="margin-top: 8px;">
                <button class="btn btn-secondary btn-small" id="fm-refresh">🔄 Rafraîchir</button>
                <button class="btn btn-secondary btn-small" id="fm-change-dir">📁 Changer</button>
                <button class="btn btn-primary btn-small" id="fm-save-here" ${!hasActions && !hasScenario ? 'disabled' : ''}>💾 Sauvegarder ici</button>
              </div>
            ` : `
              <div class="file-browser-empty">
                ${window.showDirectoryPicker ? 'Choisissez un dossier pour parcourir vos fichiers .json' : '⚠️ API File System non disponible dans ce navigateur'}
              </div>
              ${window.showDirectoryPicker ? `
                <div class="btn-group" style="margin-top: 8px;">
                  <button class="btn btn-primary" id="fm-pick-dir">📂 Choisir un dossier</button>
                </div>
              ` : ''}
            `}
          </div>

          <div class="card" style="border: 1px solid rgba(220,53,69,0.2);">
            <div class="card-header" style="color: #dc3545;">⚠️ Danger <span class="info-tip" data-info="Supprime toutes les actions, scénarios et configurations. Irréversible.">i</span></div>
            <div class="btn-group">
              <button class="btn btn-danger" id="reset-all">🗑️ Tout réinitialiser</button>
            </div>
          </div>
        </div>
      `;
    },

    renderSettingsTab() {
      const shortcutNames = {
        record: 'Enregistrer / Arrêter',
        play: 'Lancer la lecture',
        stop: 'Arrêter tout',
        pause: 'Pause / Reprendre'
      };

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Raccourcis clavier</div>
            <div style="font-size: 12px; color: ${Config.theme.textSecondary}; margin-bottom: 12px;">
              Cliquez sur une touche pour la modifier, puis appuyez sur la nouvelle touche souhaitée.
            </div>
            ${Object.entries(State.settings.shortcuts).map(([key, value]) => `
              <div class="setting-row">
                <div>
                  <div class="setting-label">${shortcutNames[key]}</div>
                </div>
                <span class="shortcut-key ${State.capturingShortcut === key ? 'capturing' : ''}" data-capture-shortcut="${key}">
                  ${State.capturingShortcut === key ? '...' : value}
                </span>
              </div>
            `).join('')}
          </div>

          <div class="card">
            <div class="card-header">Délais</div>
            <div class="input-group">
              <label>Délai entre actions (ms)</label>
              <input type="number" id="setting-delay-actions" min="100" max="10000" step="100" value="${State.settings.delayBetweenActions}">
            </div>
            <div class="input-group">
              <label>Délai entre boucles (ms)</label>
              <input type="number" id="setting-delay-loops" min="500" max="30000" step="500" value="${State.settings.delayBetweenLoops}">
            </div>
          </div>

          <div class="card">
            <div class="card-header">Préférences</div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Sauvegarde automatique</div>
                <div class="setting-desc">Sauvegarde les actions après chaque modification</div>
              </div>
              <label class="toggle">
                <input type="checkbox" id="setting-autosave" ${State.settings.autoSave ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Infobulles</div>
                <div class="setting-desc">Affiche des descriptions au survol des boutons</div>
              </div>
              <label class="toggle">
                <input type="checkbox" id="setting-tooltips" ${State.settings.showTooltips ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Confirmer avant suppression</div>
                <div class="setting-desc">Demande confirmation avant de supprimer des actions</div>
              </div>
              <label class="toggle">
                <input type="checkbox" id="setting-confirm-delete" ${State.settings.confirmBeforeDelete ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Emma Vibe Theme</div>
            <div style="display:flex;gap:8px;margin-bottom:12px;">
              ${Object.entries(Config.vibeThemes).map(([id, t]) => `
                <button class="btn ${State.vibeTheme === id ? 'btn-primary' : 'btn-secondary'} btn-small" data-vibe-theme="${id}" style="flex:1;font-size:13px;">
                  ${t.emoji} ${t.name}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="card">
            <div class="card-header">Taille du texte</div>
            <div style="display:flex;align-items:center;gap:12px;">
              <button class="btn btn-secondary btn-small" id="font-size-down" style="width:36px;height:36px;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center;">−</button>
              <span style="font-size:15px;font-weight:600;min-width:40px;text-align:center;" id="font-size-display">${State.fontSize}px</span>
              <button class="btn btn-secondary btn-small" id="font-size-up" style="width:36px;height:36px;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center;">+</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Réinitialiser</div>
            <button class="btn btn-secondary btn-small" id="reset-settings">Restaurer les valeurs par défaut</button>
          </div>
        </div>
      `;
    },

    renderHelpTab() {
      return `
        <div class="content">
          <div class="help-section">
            <div class="help-title">Guide rapide</div>
            <div class="help-step">
              <div class="help-step-num">1</div>
              <div class="help-step-text">
                <strong>Enregistrez</strong> vos actions en cliquant sur <strong>Enregistrer</strong> ou avec <span class="help-kbd">${State.settings.shortcuts.record}</span>.
                Effectuez vos clics et saisies sur la page, puis arrêtez l'enregistrement.
              </div>
            </div>
            <div class="help-step">
              <div class="help-step-num">2</div>
              <div class="help-step-text">
                <strong>Éditez</strong> vos actions dans l'onglet "Éditer": réorganisez (↑↓), dupliquez (⧉),
                modifiez (✎), supprimez (×), ou ajoutez des pauses et confirmations.
              </div>
            </div>
            <div class="help-step">
              <div class="help-step-num">3</div>
              <div class="help-step-text">
                <strong>Testez</strong> en mode simulation (case à cocher "Mode simulation") pour voir le déroulement
                sans modifier la page.
              </div>
            </div>
            <div class="help-step">
              <div class="help-step-num">4</div>
              <div class="help-step-text">
                <strong>Lancez</strong> la lecture avec <span class="help-kbd">${State.settings.shortcuts.play}</span>.
                Ajustez la vitesse et le nombre de boucles selon vos besoins.
              </div>
            </div>
            <div class="help-step">
              <div class="help-step-num">5</div>
              <div class="help-step-text">
                <strong>Sauvegardez</strong> dans l'onglet "Sauvegarder" pour réutiliser vos automatisations.
                Exportez en JSON pour les partager.
              </div>
            </div>
          </div>

          <div class="help-section">
            <div class="help-title">Raccourcis clavier actuels</div>
            <div class="card" style="margin-bottom: 0;">
              <div class="setting-row">
                <span>Enregistrer / Arrêter</span>
                <span class="help-kbd">${State.settings.shortcuts.record}</span>
              </div>
              <div class="setting-row">
                <span>Lancer la lecture</span>
                <span class="help-kbd">${State.settings.shortcuts.play}</span>
              </div>
              <div class="setting-row">
                <span>Arrêter</span>
                <span class="help-kbd">${State.settings.shortcuts.stop}</span>
              </div>
              <div class="setting-row">
                <span>Pause / Reprendre</span>
                <span class="help-kbd">${State.settings.shortcuts.pause}</span>
              </div>
            </div>
            <div style="font-size: 12px; color: ${Config.theme.textSecondary}; margin-top: 8px;">
              Modifiables dans l'onglet "Réglages"
            </div>
          </div>

          <div class="help-section">
            <div class="help-title">Types d'actions</div>
            <div class="card" style="margin-bottom: 0;">
              <div class="setting-row">
                <span>👆 Clic</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Clic sur un élément de la page</span>
              </div>
              <div class="setting-row">
                <span>⌨️ Saisie</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Entrer du texte dans un champ</span>
              </div>
              <div class="setting-row">
                <span>📝 Prompt</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Demande une saisie à l'utilisateur</span>
              </div>
              <div class="setting-row">
                <span>❓ Confirmation</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Question Oui/Non</span>
              </div>
              <div class="setting-row">
                <span>⏳ Attente</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Pause avant l'action suivante</span>
              </div>
              <div class="setting-row">
                <span>🌐 Navigation</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Aller à une URL</span>
              </div>
            </div>
          </div>

          <div style="text-align: center; padding: 16px; font-size: 12px; color: ${Config.theme.textSecondary};">
            AutoClicUS v${Config.version} · Propulsé par JSLAI
          </div>
        </div>
      `;
    },

    attachEventListeners() {
      const root = State.shadowRoot;

      // Minimize button
      const btnMinimize = root.querySelector('#btn-minimize');
      if (btnMinimize) {
        btnMinimize.addEventListener('click', (e) => {
          e.stopPropagation();
          State.isMinimized = true;
          this.render();
        });
      }

      // Action bar buttons
      const abRec = root.querySelector('#ab-rec');
      const abStopRec = root.querySelector('#ab-stop-rec');
      const abPlay = root.querySelector('#ab-play');
      const abPause = root.querySelector('#ab-pause');
      const abStopPlay = root.querySelector('#ab-stop-play');
      if (abRec) abRec.addEventListener('click', () => State.isRecording ? Recorder.stop() : Recorder.start());
      if (abStopRec) abStopRec.addEventListener('click', () => { if (State.isRecording) Recorder.stop(); });
      if (abPlay) abPlay.addEventListener('click', () => { if (!State.isPlaying) Player.start(); });
      if (abPause) abPause.addEventListener('click', () => State.isPaused ? Player.resume() : Player.pause());
      if (abStopPlay) abStopPlay.addEventListener('click', () => { if (State.isPlaying) Player.stop(); });

      // Easter egg: double-click Emma avatar to cycle vibe themes
      const avatar = root.querySelector('.header-avatar');
      if (avatar) {
        avatar.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          const themes = Object.keys(Config.vibeThemes);
          const idx = themes.indexOf(State.vibeTheme);
          State.vibeTheme = themes[(idx + 1) % themes.length];
          this.applyVibeTheme();
          const t = Config.vibeThemes[State.vibeTheme];
          this.flash('success', `${t.emoji} Thème ${t.name} activé!`);
          this.render();
        });
        avatar.style.cursor = 'pointer';
        avatar.title = 'Double-clic pour changer de thème';
      }

      // P2: Delegated click handler for tabs, action rows, condition rows
      root.addEventListener('click', (e) => {
        const t = e.target;

        // Tab clicks
        const tab = t.closest('.tab');
        if (tab && tab.dataset.tab) {
          State.currentTab = tab.dataset.tab;
          this.render();
          return;
        }

        // Action delete
        const delBtn = t.closest('[data-action-index]');
        if (delBtn) {
          const i = parseInt(delBtn.dataset.actionIndex);
          if (State.settings.confirmBeforeDelete && !confirm('Supprimer cette action?')) return;
          State.recordedActions.splice(i, 1);
          State.editingActionIndex = null;
          this.render();
          return;
        }

        // Action move up
        const upBtn = t.closest('[data-move-up]');
        if (upBtn) {
          const i = parseInt(upBtn.dataset.moveUp);
          if (i > 0) {
            [State.recordedActions[i - 1], State.recordedActions[i]] = [State.recordedActions[i], State.recordedActions[i - 1]];
            this.render();
          }
          return;
        }

        // Action move down
        const downBtn = t.closest('[data-move-down]');
        if (downBtn) {
          const i = parseInt(downBtn.dataset.moveDown);
          if (i < State.recordedActions.length - 1) {
            [State.recordedActions[i], State.recordedActions[i + 1]] = [State.recordedActions[i + 1], State.recordedActions[i]];
            this.render();
          }
          return;
        }

        // Action duplicate
        const dupBtn = t.closest('[data-duplicate]');
        if (dupBtn) {
          const i = parseInt(dupBtn.dataset.duplicate);
          const clone = JSON.parse(JSON.stringify(State.recordedActions[i]));
          clone.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
          State.recordedActions.splice(i + 1, 0, clone);
          this.render();
          this.flash('success', 'Action dupliquée');
          return;
        }

        // Action edit toggle
        const editBtn = t.closest('[data-edit-action]');
        if (editBtn) {
          const i = parseInt(editBtn.dataset.editAction);
          State.editingActionIndex = State.editingActionIndex === i ? null : i;
          this.render();
          return;
        }

        // Condition delete
        const condBtn = t.closest('[data-condition-index]');
        if (condBtn) {
          const i = parseInt(condBtn.dataset.conditionIndex);
          if (State.settings.confirmBeforeDelete && !confirm('Supprimer cette condition?')) return;
          State.conditions.splice(i, 1);
          this.render();
          return;
        }

        // Shortcut capture
        const shortcutBtn = t.closest('[data-capture-shortcut]');
        if (shortcutBtn) {
          const key = shortcutBtn.dataset.captureShortcut;
          State.capturingShortcut = State.capturingShortcut === key ? null : key;
          this.render();
          return;
        }
      });

      // Record tab
      const btnRecord = root.querySelector('#btn-record');
      const btnStopRecord = root.querySelector('#btn-stop-record');
      const btnPlay = root.querySelector('#btn-play');
      const btnPause = root.querySelector('#btn-pause');
      const btnStop = root.querySelector('#btn-stop');
      const speedInput = root.querySelector('#speed');
      const loopsInput = root.querySelector('#loops');
      const timeLimitInput = root.querySelector('#time-limit');
      const dryRunCheckbox = root.querySelector('#dry-run');

      if (btnRecord) btnRecord.addEventListener('click', () => Recorder.start());
      if (btnStopRecord) btnStopRecord.addEventListener('click', () => Recorder.stop());
      if (btnPlay) btnPlay.addEventListener('click', () => Player.start());
      if (btnPause) btnPause.addEventListener('click', () => State.isPaused ? Player.resume() : Player.pause());
      if (btnStop) btnStop.addEventListener('click', () => Player.stop());
      if (speedInput) speedInput.addEventListener('input', (e) => { State.speed = parseFloat(e.target.value); this.render(); });
      if (loopsInput) loopsInput.addEventListener('input', (e) => { State.loopCount = Math.max(1, parseInt(e.target.value) || 1); this.render(); });
      if (timeLimitInput) timeLimitInput.addEventListener('input', (e) => { State.timeLimit = parseInt(e.target.value) * 1000; });

      // Rate bar inputs
      const rateBuyerInput = root.querySelector('#rate-buyer');
      const rateSellerInput = root.querySelector('#rate-seller');
      const countdownTimeInput = root.querySelector('#countdown-time');

      if (rateBuyerInput) rateBuyerInput.addEventListener('input', (e) => {
        State.tauxAcheteur = e.target.value;
        this._updateRateFieldVisuals(root);
      });
      if (rateSellerInput) rateSellerInput.addEventListener('input', (e) => {
        State.tauxVendeur = e.target.value;
        this._updateRateFieldVisuals(root);
      });
      if (countdownTimeInput) {
        countdownTimeInput.addEventListener('change', (e) => {
          const val = e.target.value;
          if (!val) {
            State.countdownEnd = null;
            this.render();
            return;
          }
          const [h, m] = val.split(':').map(Number);
          const target = new Date();
          target.setHours(h, m, 0, 0);
          if (target.getTime() <= Date.now()) target.setDate(target.getDate() + 1);
          State.countdownEnd = target.getTime();
          this.render();
        });
      }
      if (dryRunCheckbox) dryRunCheckbox.addEventListener('change', (e) => { State.dryRun = e.target.checked; });

      // Scenario tab
      const btnLaunchScenario = root.querySelector('#btn-launch-scenario');
      const btnResetScenario = root.querySelector('#btn-reset-scenario');

      if (btnLaunchScenario) {
        btnLaunchScenario.addEventListener('click', () => {
          // === PRE-FLIGHT VALIDATION (all checks BEFORE launch, zero dialogs) ===
          const errors = [];

          // 1. All required steps configured
          if (!Scenario.isAllRequiredConfigured()) {
            errors.push('Étapes requises non configurées');
          }

          // 2. Only the selected rate must be set
          const isVendeur = State.scenario.rateModel === 'vendeur';
          const rateLabel = isVendeur ? 'vendeur' : 'acheteur';
          const rateValue = isVendeur ? State.tauxVendeur : State.tauxAcheteur;
          const rateNum = parseFloat(rateValue);
          if (!rateValue || isNaN(rateNum) || rateNum <= 0) {
            errors.push(`Taux ${rateLabel} non défini ou invalide`);
          }

          // 3. Rate range validation (warning, not blocking)
          if (!isNaN(rateNum) && rateNum > 0) {
            if (rateNum < Config.rateValidation.min || rateNum > Config.rateValidation.max) {
              this.flash('warning', `⚠️ Taux ${rateLabel} ${rateNum} hors limites (${Config.rateValidation.min}-${Config.rateValidation.max})`);
            }
          }

          // 4. Loop count must be valid
          if (!State.loopCount || State.loopCount < 1) {
            errors.push('Nombre de boucles invalide');
          }

          // Block launch if errors
          if (errors.length > 0) {
            this.flash('error', errors.join(' • '));
            return;
          }

          // All validations passed — build and launch
          this.flash('success', '🚀 Scénario lancé — ' + Scenario.defaultWorkflow.name);
          State.recordedActions = Scenario.buildActionSequence();
          Player.start();
        });
      }

      if (btnResetScenario) {
        btnResetScenario.addEventListener('click', () => {
          State.scenario.stepActions = {};
          Scenario.saveConfig();
          this.render();
          this.flash('info', 'Scénario réinitialisé');
        });
      }

      // Scenario configure buttons (delegated)
      root.querySelectorAll('[data-scenario-configure]').forEach(btn => {
        btn.addEventListener('click', () => {
          const stepId = btn.dataset.scenarioConfigure;
          Scenario.startGuidedRecording(stepId);
        });
      });

      // Scenario model toggle (delegated)
      root.querySelectorAll('[data-scenario-model]').forEach(btn => {
        btn.addEventListener('click', () => {
          State.scenario.rateModel = btn.dataset.scenarioModel;
          Scenario.saveConfig();
          this.render();
        });
      });

      // Conditions tab — inline form
      const btnAddCondition = root.querySelector('#add-condition');
      const btnTestConditions = root.querySelector('#test-conditions');

      if (btnAddCondition) {
        btnAddCondition.addEventListener('click', () => {
          State.showConditionForm = !State.showConditionForm;
          State.pickedElement = null;
          this.render();
        });
      }

      if (btnTestConditions) {
        btnTestConditions.addEventListener('click', () => {
          this.render(); // Re-render shows live ✅/❌ status on each condition
          this.flash('info', 'Conditions testées — résultats affichés');
        });
      }

      // Condition form actions
      const btnSubmitCond = root.querySelector('#submit-condition-form');
      const btnCancelCond = root.querySelector('#cancel-condition-form');
      const btnPickElement = root.querySelector('#pick-element-cond');

      if (btnSubmitCond) {
        btnSubmitCond.addEventListener('click', () => {
          const name = root.querySelector('#form-cond-name')?.value;
          const type = root.querySelector('#form-cond-type')?.value;
          const selector = root.querySelector('#form-cond-selector')?.value || State.pickedElement;
          const value = root.querySelector('#form-cond-value')?.value || '';
          const preflight = root.querySelector('#form-cond-preflight')?.checked || false;

          if (!name || !selector) {
            this.flash('error', 'Nom et sélecteur requis');
            return;
          }

          State.conditions.push({ name, type, selector, value, preflight });
          State.showConditionForm = false;
          State.pickedElement = null;
          this.render();
          this.flash('success', 'Condition ajoutée');
        });
      }

      if (btnCancelCond) {
        btnCancelCond.addEventListener('click', () => {
          State.showConditionForm = false;
          State.pickedElement = null;
          this.render();
        });
      }

      if (btnPickElement) {
        btnPickElement.addEventListener('click', () => {
          this.startElementPicker((selector) => {
            State.pickedElement = selector;
            const input = root.querySelector('#form-cond-selector');
            if (input) input.value = selector;
            this.render();
          });
        });
      }

      // P2: Condition delete handled by delegated handler above

      // Edit tab — inline forms
      const btnAddPrompt = root.querySelector('#add-prompt');
      const btnAddConfirm = root.querySelector('#add-confirm');
      const btnAddWait = root.querySelector('#add-wait');
      const btnAddNavigate = root.querySelector('#add-navigate');
      const btnClearActions = root.querySelector('#clear-actions');

      if (btnAddPrompt) {
        btnAddPrompt.addEventListener('click', () => {
          State.showPromptForm = !State.showPromptForm;
          State.showConfirmForm = false;
          this.render();
        });
      }

      if (btnAddConfirm) {
        btnAddConfirm.addEventListener('click', () => {
          State.showConfirmForm = !State.showConfirmForm;
          State.showPromptForm = false;
          this.render();
        });
      }

      if (btnAddWait) {
        btnAddWait.addEventListener('click', () => {
          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'wait',
            delay: State.settings.delayBetweenActions
          });
          this.render();
          this.flash('success', 'Attente ajoutée');
        });
      }

      if (btnAddNavigate) {
        btnAddNavigate.addEventListener('click', () => {
          const url = prompt('URL de destination:');
          if (!url) return;
          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'navigate',
            url: url
          });
          this.render();
          this.flash('success', 'Navigation ajoutée');
        });
      }

      const btnPasteBuyer = root.querySelector('#add-paste-buyer');
      const btnPasteSeller = root.querySelector('#add-paste-seller');

      if (btnPasteBuyer) {
        btnPasteBuyer.addEventListener('click', () => {
          State.recordedActions.push({ id: Date.now().toString(36), type: 'paste_buyer_rate' });
          this.render();
          this.flash('success', 'Coller taux acheteur ajouté');
        });
      }

      if (btnPasteSeller) {
        btnPasteSeller.addEventListener('click', () => {
          State.recordedActions.push({ id: Date.now().toString(36), type: 'paste_seller_rate' });
          this.render();
          this.flash('success', 'Coller taux vendeur ajouté');
        });
      }

      // Prompt form actions
      const btnSubmitPrompt = root.querySelector('#submit-prompt-form');
      const btnCancelPrompt = root.querySelector('#cancel-prompt-form');

      if (btnSubmitPrompt) {
        btnSubmitPrompt.addEventListener('click', () => {
          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'prompt',
            title: root.querySelector('#form-prompt-title')?.value || 'Entrée requise',
            message: root.querySelector('#form-prompt-msg')?.value || '',
            placeholder: root.querySelector('#form-prompt-ph')?.value || '',
            targetSelector: root.querySelector('#form-prompt-sel')?.value || '',
            required: true
          });
          State.showPromptForm = false;
          this.render();
          this.flash('success', 'Saisie ajoutée');
        });
      }

      if (btnCancelPrompt) {
        btnCancelPrompt.addEventListener('click', () => {
          State.showPromptForm = false;
          this.render();
        });
      }

      // Confirm form actions
      const btnSubmitConfirm = root.querySelector('#submit-confirm-form');
      const btnCancelConfirm = root.querySelector('#cancel-confirm-form');

      if (btnSubmitConfirm) {
        btnSubmitConfirm.addEventListener('click', () => {
          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'confirm',
            title: root.querySelector('#form-confirm-title')?.value || 'Confirmation',
            message: root.querySelector('#form-confirm-msg')?.value || '',
            details: root.querySelector('#form-confirm-details')?.value || '',
            okLabel: 'Oui',
            cancelLabel: 'Non'
          });
          State.showConfirmForm = false;
          this.render();
          this.flash('success', 'Confirmation ajoutée');
        });
      }

      if (btnCancelConfirm) {
        btnCancelConfirm.addEventListener('click', () => {
          State.showConfirmForm = false;
          this.render();
        });
      }

      if (btnClearActions) {
        btnClearActions.addEventListener('click', () => {
          if (confirm('Effacer toutes les actions?')) {
            State.recordedActions = [];
            this.render();
          }
        });
      }

      // P2: Action row buttons (delete, move, duplicate, edit) handled by delegated handler above

      root.querySelectorAll('[data-edit-index]').forEach(input => {
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const i = parseInt(input.dataset.editIndex);
            const action = State.recordedActions[i];
            if (action.type === 'prompt' || action.type === 'confirm') {
              action.title = input.value;
            } else if (action.type === 'wait') {
              action.delay = parseInt(input.value) || 1000;
            } else {
              action.value = input.value;
            }
            State.editingActionIndex = null;
            this.render();
          }
          if (e.key === 'Escape') {
            State.editingActionIndex = null;
            this.render();
          }
        });
        input.focus();
      });

      // Settings tab
      // P2: Shortcut capture handled by delegated handler above

      const delayActions = root.querySelector('#setting-delay-actions');
      const delayLoops = root.querySelector('#setting-delay-loops');
      const autoSave = root.querySelector('#setting-autosave');
      const tooltips = root.querySelector('#setting-tooltips');
      const confirmDelete = root.querySelector('#setting-confirm-delete');
      const resetSettings = root.querySelector('#reset-settings');

      if (delayActions) delayActions.addEventListener('input', (e) => { State.settings.delayBetweenActions = parseInt(e.target.value); });
      if (delayLoops) delayLoops.addEventListener('input', (e) => { State.settings.delayBetweenLoops = parseInt(e.target.value); });
      if (autoSave) autoSave.addEventListener('change', (e) => { State.settings.autoSave = e.target.checked; });
      if (tooltips) tooltips.addEventListener('change', (e) => { State.settings.showTooltips = e.target.checked; });
      if (confirmDelete) confirmDelete.addEventListener('change', (e) => { State.settings.confirmBeforeDelete = e.target.checked; });
      if (resetSettings) {
        resetSettings.addEventListener('click', () => {
          State.settings = {
            shortcuts: { record: 'F6', play: 'F7', stop: 'F8', pause: 'F9' },
            delayBetweenActions: 1000,
            delayBetweenLoops: 2000,
            autoSave: true,
            showTooltips: true,
            confirmBeforeDelete: true
          };
          this.render();
          this.flash('success', 'Réglages réinitialisés');
        });
      }

      // Vibe theme buttons
      root.querySelectorAll('[data-vibe-theme]').forEach(btn => {
        btn.addEventListener('click', () => {
          State.vibeTheme = btn.dataset.vibeTheme;
          this.render();
          this.flash('success', `Theme: ${Config.vibeThemes[State.vibeTheme].emoji} ${Config.vibeThemes[State.vibeTheme].name}`);
        });
      });

      // Font size buttons
      const fontDown = root.querySelector('#font-size-down');
      const fontUp = root.querySelector('#font-size-up');
      if (fontDown) fontDown.addEventListener('click', () => {
        if (State.fontSize > 12) { State.fontSize -= 1; this.render(); }
      });
      if (fontUp) fontUp.addEventListener('click', () => {
        if (State.fontSize < 20) { State.fontSize += 1; this.render(); }
      });

      // Audit tab
      const btnExportJSON = root.querySelector('#export-audit-json');
      const btnExportCSV = root.querySelector('#export-audit-csv');
      const btnClearAudit = root.querySelector('#clear-audit');

      if (btnExportJSON) btnExportJSON.addEventListener('click', () => Audit.exportJSON());
      if (btnExportCSV) btnExportCSV.addEventListener('click', () => Audit.exportCSV());
      if (btnClearAudit) {
        btnClearAudit.addEventListener('click', () => {
          if (confirm('Effacer tout l\'historique d\'audit?')) {
            Audit.clear();
            this.render();
          }
        });
      }

      // Save tab
      const btnSaveLocal = root.querySelector('#save-local');
      const btnLoadLocal = root.querySelector('#load-local');
      const btnExportJSONFile = root.querySelector('#export-json');
      const btnImportJSON = root.querySelector('#import-json');
      const btnResetAll = root.querySelector('#reset-all');

      if (btnSaveLocal) {
        btnSaveLocal.addEventListener('click', () => {
          try {
            Storage.setItem(Config.storage.actions, JSON.stringify(State.recordedActions));
            Storage.setItem(Config.storage.conditions, JSON.stringify(State.conditions));
            Storage.setItem(Config.storage.config, JSON.stringify({
              speed: State.speed,
              loopCount: State.loopCount,
              timeLimit: State.timeLimit,
              settings: State.settings
            }));
            this.flash('success', 'Sauvegardé');
          } catch (e) {
            this.flash('error', 'Erreur de sauvegarde');
          }
        });
      }

      if (btnLoadLocal) {
        btnLoadLocal.addEventListener('click', () => {
          try {
            const actions = Storage.getItem(Config.storage.actions);
            const conditions = Storage.getItem(Config.storage.conditions);
            const config = Storage.getItem(Config.storage.config);

            if (actions) State.recordedActions = JSON.parse(actions);
            if (conditions) State.conditions = JSON.parse(conditions);
            if (config) {
              const cfg = JSON.parse(config);
              State.speed = cfg.speed || 1;
              State.loopCount = cfg.loopCount || 1;
              State.timeLimit = cfg.timeLimit || null;
              if (cfg.settings) Object.assign(State.settings, cfg.settings);
            }

            this.flash('success', 'Chargé');
            this.render();
          } catch (e) {
            this.flash('error', 'Erreur de chargement');
          }
        });
      }

      if (btnExportJSONFile) {
        btnExportJSONFile.addEventListener('click', () => {
          const data = {
            version: Config.version,
            actions: State.recordedActions,
            conditions: State.conditions,
            config: {
              speed: State.speed,
              loopCount: State.loopCount,
              timeLimit: State.timeLimit,
              settings: State.settings
            }
          };

          const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `autoclicus-${new Date().toISOString()}.json`;
          a.click();
          URL.revokeObjectURL(url);
        });
      }

      if (btnImportJSON) {
        btnImportJSON.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = (event) => {
            try {
              const data = JSON.parse(event.target.result);

              if (data.actions) State.recordedActions = data.actions;
              if (data.conditions) State.conditions = data.conditions;
              if (data.config) {
                State.speed = data.config.speed || 1;
                State.loopCount = data.config.loopCount || 1;
                State.timeLimit = data.config.timeLimit || null;
                if (data.config.settings) Object.assign(State.settings, data.config.settings);
              }

              this.flash('success', 'Importé');
              this.render();
            } catch (e) {
              this.flash('error', 'Fichier invalide');
            }
          };
          reader.readAsText(file);
        });
      }

      // File Manager handlers
      const btnFmPick = root.querySelector('#fm-pick-dir');
      const btnFmRefresh = root.querySelector('#fm-refresh');
      const btnFmChangeDir = root.querySelector('#fm-change-dir');
      const btnFmSaveHere = root.querySelector('#fm-save-here');
      const fileItems = root.querySelectorAll('.file-item[data-file-idx]');

      if (btnFmPick) {
        btnFmPick.addEventListener('click', async () => {
          const ok = await FileManager.pickDirectory();
          if (ok) { this.flash('success', `📂 ${FileManager.files.length} fichier(s) trouvé(s)`); this.render(); }
        });
      }

      if (btnFmRefresh) {
        btnFmRefresh.addEventListener('click', async () => {
          await FileManager.listFiles();
          this.flash('success', `🔄 ${FileManager.files.length} fichier(s)`);
          this.render();
        });
      }

      if (btnFmChangeDir) {
        btnFmChangeDir.addEventListener('click', async () => {
          const ok = await FileManager.pickDirectory();
          if (ok) { this.flash('success', `📂 ${FileManager.files.length} fichier(s) trouvé(s)`); this.render(); }
        });
      }

      if (btnFmSaveHere) {
        btnFmSaveHere.addEventListener('click', async () => {
          const data = {
            version: Config.version,
            actions: State.recordedActions,
            conditions: State.conditions,
            scenario: State.scenario,
            config: { speed: State.speed, loopCount: State.loopCount, timeLimit: State.timeLimit, settings: State.settings }
          };
          const filename = `autoclicus-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
          const ok = await FileManager.saveToDirectory(filename, data);
          if (ok) { this.flash('success', `💾 ${filename}`); this.render(); }
          else { this.flash('error', 'Erreur de sauvegarde'); }
        });
      }

      fileItems.forEach(item => {
        item.addEventListener('click', async () => {
          const idx = parseInt(item.dataset.fileIdx);
          const fileInfo = FileManager.files[idx];
          if (!fileInfo) return;

          item.style.opacity = '0.5';
          const data = await FileManager.loadFile(fileInfo);
          item.style.opacity = '1';

          if (!data) { this.flash('error', 'Fichier invalide'); return; }

          if (data.actions) State.recordedActions = data.actions;
          if (data.conditions) State.conditions = data.conditions;
          if (data.scenario) Object.assign(State.scenario, data.scenario);
          if (data.config) {
            State.speed = data.config.speed || 1;
            State.loopCount = data.config.loopCount || 1;
            State.timeLimit = data.config.timeLimit || null;
            if (data.config.settings) Object.assign(State.settings, data.config.settings);
          }

          this.flash('success', `📄 ${fileInfo.name} chargé`);
          this.render();
        });
      });

      if (btnResetAll) {
        btnResetAll.addEventListener('click', () => {
          if (confirm('Tout réinitialiser? Cette action est irréversible.')) {
            State.recordedActions = [];
            State.conditions = [];
            State.speed = 1;
            State.loopCount = 1;
            State.timeLimit = null;
            Audit.clear();
            Storage.removeItem(Config.storage.actions);
            Storage.removeItem(Config.storage.conditions);
            Storage.removeItem(Config.storage.config);
            this.flash('success', 'Réinitialisé');
            this.render();
          }
        });
      }
    },

    attachDragHandle() {
      const root = State.shadowRoot;
      const header = root.querySelector('.header');
      const ui = root.querySelector('#autoclicus-ui');
      if (!header || !ui) return;

      header.addEventListener('mousedown', (e) => {
        if (e.target.closest('button, a, input')) return;
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const rect = ui.getBoundingClientRect();
        const startLeft = rect.left;
        const startTop = rect.top;

        // Switch from right-positioned to left-positioned for drag
        ui.style.left = startLeft + 'px';
        ui.style.top = startTop + 'px';
        ui.style.right = 'auto';

        const onMove = (ev) => {
          const dx = ev.clientX - startX;
          const dy = ev.clientY - startY;
          const newLeft = Math.max(0, Math.min(window.innerWidth - 100, startLeft + dx));
          const newTop = Math.max(0, Math.min(window.innerHeight - 50, startTop + dy));
          ui.style.left = newLeft + 'px';
          ui.style.top = newTop + 'px';
        };

        const onUp = () => {
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup', onUp);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
      });
    },

    attachResizeHandles() {
      const root = State.shadowRoot;
      const ui = root.querySelector('#autoclicus-ui');
      if (!ui) return;

      const edges = root.querySelectorAll('.resize-edge');
      edges.forEach(edge => {
        edge.addEventListener('mousedown', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const dir = edge.dataset.dir;
          const startX = e.clientX;
          const startY = e.clientY;
          const rect = ui.getBoundingClientRect();
          const startW = rect.width;
          const startH = rect.height;
          const startLeft = rect.left;
          const startTop = rect.top;

          // Ensure left/top positioning
          ui.style.left = startLeft + 'px';
          ui.style.top = startTop + 'px';
          ui.style.right = 'auto';

          const onMove = (ev) => {
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;

            if (dir.includes('e')) {
              ui.style.width = Math.max(340, Math.min(window.innerWidth * 0.95, startW + dx)) + 'px';
            }
            if (dir.includes('w')) {
              const newW = Math.max(340, startW - dx);
              ui.style.width = newW + 'px';
              ui.style.left = (startLeft + startW - newW) + 'px';
            }
            if (dir.includes('s')) {
              ui.style.maxHeight = 'none';
              ui.style.height = Math.max(200, Math.min(window.innerHeight * 0.95, startH + dy)) + 'px';
            }
            if (dir.includes('n')) {
              const newH = Math.max(200, startH - dy);
              ui.style.maxHeight = 'none';
              ui.style.height = newH + 'px';
              ui.style.top = (startTop + startH - newH) + 'px';
            }
          };

          const onUp = () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
          };

          document.addEventListener('mousemove', onMove);
          document.addEventListener('mouseup', onUp);
        });
      });
    },

    attachKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        // Shortcut capture mode for settings
        if (State.capturingShortcut) {
          e.preventDefault();
          State.settings.shortcuts[State.capturingShortcut] = e.key;
          State.capturingShortcut = null;
          this.render();
          this.flash('success', `Raccourci mis à jour: ${e.key}`);
          return;
        }

        const key = e.key;
        const shortcuts = State.settings.shortcuts;

        // F8 (Stop) and F9 (Pause) ALWAYS work — even when focused on input
        // This is critical: user must NEVER be locked out during playback
        if (key === shortcuts.stop) {
          e.preventDefault();
          if (State.isPlaying) Player.stop();
          if (State.isRecording) Recorder.stop();
          return;
        }

        if (key === shortcuts.pause) {
          e.preventDefault();
          if (State.isPlaying) {
            State.isPaused ? Player.resume() : Player.pause();
          }
          return;
        }

        // Other shortcuts ignored when typing in input
        if (e.target.matches('input, textarea, select')) return;

        if (key === shortcuts.record) {
          e.preventDefault();
          State.isRecording ? Recorder.stop() : Recorder.start();
        }

        if (key === shortcuts.play) {
          e.preventDefault();
          if (!State.isPlaying && State.recordedActions.length > 0) Player.start();
        }
      });
    },

    flash(type, message) {
      const colors = {
        success: { bg: Config.theme.success, fg: '#fff', icon: '✅' },
        error: { bg: Config.theme.error, fg: '#fff', icon: '❌' },
        warning: { bg: Config.theme.warning, fg: Config.theme.text, icon: '⚠️' },
        info: { bg: Config.theme.primary, fg: '#fff', icon: 'ℹ️' }
      };
      const c = colors[type] || colors.info;

      // Render inside panel (below action bar) if panel is open
      const root = State.shadowRoot;
      const flashArea = root?.querySelector('.flash-area');
      if (flashArea) {
        // Remove any existing flash in panel
        flashArea.querySelectorAll('.flash-inline').forEach(el => el.remove());

        const el = document.createElement('div');
        el.className = 'flash-inline';
        el.textContent = `${c.icon} ${message}`;
        el.style.cssText = `
          padding: 8px 14px; margin: 0; font-size: 12px; font-weight: 500;
          background: ${c.bg}18; color: ${type === 'warning' ? Config.theme.text : c.bg};
          border-left: 3px solid ${c.bg}; border-bottom: 1px solid ${c.bg}30;
          animation: autoclicus-flash-in 0.25s ease-out;
        `;
        flashArea.appendChild(el);
        setTimeout(() => { if (el.parentNode) el.remove(); }, 4000);
      }

      // Also show page-level flash for major events (visible when minimized)
      const flash = document.createElement('div');
      flash.textContent = `${c.icon} ${message}`;
      flash.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        padding: 12px 24px; border-radius: 10px; z-index: 1000000;
        font-weight: 500; font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 4px 20px ${Config.theme.shadow}, 0 0 15px ${c.bg}40;
        background: ${c.bg}; color: ${c.fg};
        animation: autoclicus-flash 0.3s ease-out;
        backdrop-filter: blur(8px);
        border: 1px solid ${c.bg}60;
      `;

      if (!document.getElementById('autoclicus-flash-style')) {
        const style = document.createElement('style');
        style.id = 'autoclicus-flash-style';
        style.textContent = `
          @keyframes autoclicus-flash { from { opacity:0; transform:translate(-50%,-20px); } to { opacity:1; transform:translate(-50%,0); } }
          @keyframes autoclicus-flash-in { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:translateY(0); } }
        `;
        document.head.appendChild(style);
      }

      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 3000);
    },

    // Page-wide visual feedback: green gradient wash for play, red border for record
    pageBorderFlash(mode) {
      this.pageBorderClear();

      if (mode === 'play') {
        // === PLAY MODE: Full-page dreamy green gradient wash ===
        const overlay = document.createElement('div');
        overlay.id = 'autoclicus-page-border';
        overlay.style.cssText = `
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none; z-index: 999990;
          background: linear-gradient(180deg,
            rgba(0, 135, 78, 0.12) 0%,
            rgba(74, 222, 128, 0.06) 30%,
            rgba(0, 135, 78, 0.03) 60%,
            rgba(56, 189, 248, 0.08) 100%
          );
          border: 3px solid rgba(0, 135, 78, 0.35);
          animation: autoclicus-play-breathe 3s ease-in-out infinite;
        `;

        // Soft top green glow bar
        const topGlow = document.createElement('div');
        topGlow.className = 'autoclicus-play-glow';
        topGlow.style.cssText = `
          position: fixed; top: 0; left: 0; right: 0; height: 120px;
          pointer-events: none; z-index: 999990;
          background: linear-gradient(180deg, rgba(0, 135, 78, 0.18) 0%, transparent 100%);
        `;

        // Soft bottom blue-green glow
        const bottomGlow = document.createElement('div');
        bottomGlow.className = 'autoclicus-play-glow';
        bottomGlow.style.cssText = `
          position: fixed; bottom: 0; left: 0; right: 0; height: 80px;
          pointer-events: none; z-index: 999990;
          background: linear-gradient(0deg, rgba(56, 189, 248, 0.12) 0%, transparent 100%);
        `;

        // Side edge glows
        const leftGlow = document.createElement('div');
        leftGlow.className = 'autoclicus-play-glow';
        leftGlow.style.cssText = `
          position: fixed; top: 0; left: 0; bottom: 0; width: 60px;
          pointer-events: none; z-index: 999990;
          background: linear-gradient(90deg, rgba(0, 135, 78, 0.1) 0%, transparent 100%);
        `;

        const rightGlow = document.createElement('div');
        rightGlow.className = 'autoclicus-play-glow';
        rightGlow.style.cssText = `
          position: fixed; top: 0; right: 0; bottom: 0; width: 60px;
          pointer-events: none; z-index: 999990;
          background: linear-gradient(270deg, rgba(0, 135, 78, 0.1) 0%, transparent 100%);
        `;

        // Initial burst
        const burst = document.createElement('div');
        burst.className = 'autoclicus-play-glow';
        burst.style.cssText = `
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none; z-index: 999989;
          background: rgba(0, 135, 78, 0.12);
          animation: autoclicus-burst 0.8s ease-out forwards;
        `;

        const css = `
          @keyframes autoclicus-play-breathe {
            0%, 100% {
              background: linear-gradient(180deg,
                rgba(0, 135, 78, 0.10) 0%,
                rgba(74, 222, 128, 0.04) 30%,
                rgba(0, 135, 78, 0.02) 60%,
                rgba(56, 189, 248, 0.06) 100%
              );
              border-color: rgba(0, 135, 78, 0.25);
            }
            50% {
              background: linear-gradient(180deg,
                rgba(0, 135, 78, 0.18) 0%,
                rgba(74, 222, 128, 0.08) 30%,
                rgba(0, 135, 78, 0.05) 60%,
                rgba(56, 189, 248, 0.12) 100%
              );
              border-color: rgba(0, 135, 78, 0.50);
            }
          }
          @keyframes autoclicus-burst {
            from { opacity: 1; } to { opacity: 0; }
          }
        `;

        this._setBorderStyle(css);
        document.body.append(overlay, topGlow, bottomGlow, leftGlow, rightGlow, burst);
        setTimeout(() => burst.remove(), 800);

      } else {
        // === RECORD MODE: Red pulsing border with corner indicators ===
        const color = 'rgba(220, 53, 69,';

        const border = document.createElement('div');
        border.id = 'autoclicus-page-border';
        border.style.cssText = `
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none; z-index: 999990;
          border: 5px solid ${color}0.8);
          box-shadow: inset 0 0 60px ${color}0.35), inset 0 0 120px ${color}0.15);
          animation: autoclicus-border-wave 1.5s ease-in-out infinite;
        `;

        // Corner pulses
        [
          { top: '0', left: '0', radius: '0 0 12px 0' },
          { top: '0', right: '0', radius: '0 0 0 12px' },
          { bottom: '0', left: '0', radius: '0 12px 0 0' },
          { bottom: '0', right: '0', radius: '12px 0 0 0' }
        ].forEach(pos => {
          const corner = document.createElement('div');
          corner.className = 'autoclicus-corner-pulse';
          corner.style.cssText = `
            position: fixed; width: 24px; height: 24px;
            pointer-events: none; z-index: 999991;
            background: #dc3545;
            border-radius: ${pos.radius};
            animation: autoclicus-corner-pulse 1s ease-in-out infinite;
            ${pos.top !== undefined ? `top:${pos.top};` : ''}
            ${pos.bottom !== undefined ? `bottom:${pos.bottom};` : ''}
            ${pos.left !== undefined ? `left:${pos.left};` : ''}
            ${pos.right !== undefined ? `right:${pos.right};` : ''}
          `;
          document.body.appendChild(corner);
        });

        // Burst
        const burst = document.createElement('div');
        burst.className = 'autoclicus-play-glow';
        burst.style.cssText = `
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none; z-index: 999989;
          background: ${color}0.15);
          animation: autoclicus-burst 0.6s ease-out forwards;
        `;

        const css = `
          @keyframes autoclicus-border-wave {
            0%, 100% { box-shadow: inset 0 0 40px ${color}0.25), inset 0 0 80px ${color}0.12); border-color: ${color}0.6); }
            50% { box-shadow: inset 0 0 80px ${color}0.5), inset 0 0 150px ${color}0.25); border-color: ${color}0.95); }
          }
          @keyframes autoclicus-corner-pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          @keyframes autoclicus-burst {
            from { opacity: 1; } to { opacity: 0; }
          }
        `;

        this._setBorderStyle(css);
        document.body.append(border, burst);
        setTimeout(() => burst.remove(), 600);
      }
    },

    _setBorderStyle(css) {
      const styleEl = document.getElementById('autoclicus-border-style');
      if (!styleEl) {
        const style = document.createElement('style');
        style.id = 'autoclicus-border-style';
        style.textContent = css;
        document.head.appendChild(style);
      } else {
        styleEl.textContent = css;
      }
    },

    pageBorderClear() {
      const border = document.getElementById('autoclicus-page-border');
      if (border) border.remove();
      document.querySelectorAll('.autoclicus-corner-pulse, .autoclicus-play-glow').forEach(el => el.remove());
    },

    // Update minimized progress bar during playback (lightweight)
    updateMinimizedProgress() {
      if (!State.isMinimized) return;
      const root = State.shadowRoot;
      if (!root) return;
      const fill = root.querySelector('.mini-progress-fill');
      const status = root.querySelector('.mini-status');
      if (fill && State.loopCount > 0) {
        fill.style.width = `${Math.round((State.currentLoop / State.loopCount) * 100)}%`;
      }
      if (status) {
        status.textContent = State.isPlaying
          ? `${State.currentLoop}/${State.loopCount}`
          : State.isRecording ? 'REC' : 'Prêt';
      }
    },

    applyVibeTheme() {
      const theme = Config.vibeThemes[State.vibeTheme] || Config.vibeThemes.neutre;
      const ui = State.shadowRoot?.querySelector('#autoclicus-ui');
      if (!ui) return;

      // Apply header gradient
      const header = ui.querySelector('.header');
      if (header) header.style.background = theme.headerBg;

      // Apply background & border colors
      ui.style.background = theme.bg;
      ui.style.borderColor = theme.borderGlow;

      // Apply font size
      ui.style.fontSize = `${State.fontSize}px`;

      // Save preferences
      try {
        Storage.setItem('autoclicus_vibe', JSON.stringify({
          theme: State.vibeTheme,
          fontSize: State.fontSize
        }));
      } catch (e) { /* ignore */ }
    },

    loadVibePrefs() {
      try {
        const saved = Storage.getItem('autoclicus_vibe');
        if (saved) {
          const data = JSON.parse(saved);
          if (data.theme && Config.vibeThemes[data.theme]) State.vibeTheme = data.theme;
          if (data.fontSize >= 12 && data.fontSize <= 20) State.fontSize = data.fontSize;
        }
      } catch (e) { /* ignore */ }
    },

    startElementPicker(callback) {
      this.flash('info', 'Cliquez sur un élément de la page pour le sélectionner');

      let highlight = null;
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:999990;cursor:crosshair;';

      const onMove = (e) => {
        if (highlight) highlight.remove();
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el && el !== overlay && !el.closest('#autoclicus-container')) {
          const rect = el.getBoundingClientRect();
          highlight = document.createElement('div');
          highlight.style.cssText = `position:fixed;top:${rect.top}px;left:${rect.left}px;width:${rect.width}px;height:${rect.height}px;border:2px solid ${Config.theme.primary};background:rgba(0,135,78,0.1);pointer-events:none;z-index:999991;border-radius:4px;`;
          document.body.appendChild(highlight);
        }
      };

      const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (highlight) highlight.remove();
        overlay.remove();
        document.removeEventListener('mousemove', onMove, true);

        if (el && el !== overlay) {
          const selector = Fingerprint.getSelector(el);
          callback(selector);
          this.flash('success', `Élément sélectionné: ${selector.substring(0, 50)}`);
        }
      };

      overlay.addEventListener('click', onClick, { once: true });
      document.addEventListener('mousemove', onMove, true);
      document.body.appendChild(overlay);

      // Cancel on Escape
      const onEsc = (e) => {
        if (e.key === 'Escape') {
          if (highlight) highlight.remove();
          overlay.remove();
          document.removeEventListener('mousemove', onMove, true);
          document.removeEventListener('keydown', onEsc);
          this.flash('info', 'Sélection annulée');
        }
      };
      document.addEventListener('keydown', onEsc);
    },

    highlightElement(element, dryRun = false) {
      const rect = element.getBoundingClientRect();
      const color = dryRun ? '255, 193, 7' : '0, 135, 78';
      const colorHex = dryRun ? '#ffc107' : '#00874e';

      // Inject keyframes once
      if (!document.getElementById('autoclicus-highlight-styles')) {
        const style = document.createElement('style');
        style.id = 'autoclicus-highlight-styles';
        style.textContent = `
          @keyframes ac-highlight-in { 0% { opacity:0; transform:scale(0.95); } 100% { opacity:1; transform:scale(1); } }
          @keyframes ac-highlight-out { 0% { opacity:1; } 100% { opacity:0; transform:scale(1.02); } }
          @keyframes ac-ripple { 0% { transform:scale(0.5); opacity:0.8; } 100% { transform:scale(2.5); opacity:0; } }
          @keyframes ac-step-in { 0% { opacity:0; transform:translateY(8px) scale(0.8); } 100% { opacity:1; transform:translateY(0) scale(1); } }
          @keyframes ac-step-out { 0% { opacity:1; } 100% { opacity:0; transform:translateY(-8px); } }
        `;
        document.head.appendChild(style);
      }

      // Highlight box
      const highlight = document.createElement('div');
      highlight.style.cssText = `
        position:fixed; top:${rect.top - 3}px; left:${rect.left - 3}px;
        width:${rect.width + 6}px; height:${rect.height + 6}px;
        border: 2px solid rgba(${color}, 0.9);
        background: rgba(${color}, 0.08);
        box-shadow: 0 0 20px rgba(${color}, 0.5), 0 0 40px rgba(${color}, 0.2), inset 0 0 10px rgba(${color}, 0.1);
        pointer-events:none; z-index:999998; border-radius:6px;
        animation: ac-highlight-in 0.2s ease-out;
      `;

      // Ripple effect at center of element
      const ripple = document.createElement('div');
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rippleSize = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:fixed; top:${cy - rippleSize/2}px; left:${cx - rippleSize/2}px;
        width:${rippleSize}px; height:${rippleSize}px;
        border-radius:50%; border: 2px solid rgba(${color}, 0.6);
        pointer-events:none; z-index:999997;
        animation: ac-ripple 0.6s ease-out forwards;
      `;

      // Step counter badge
      const step = State.currentStep + 1;
      const total = State.recordedActions.length;
      const badge = document.createElement('div');
      badge.style.cssText = `
        position:fixed; top:${rect.top - 28}px; left:${rect.left}px;
        background:${colorHex}; color:white;
        padding:3px 10px; border-radius:10px; font-size:11px; font-weight:700;
        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        pointer-events:none; z-index:999999; white-space:nowrap;
        box-shadow: 0 2px 8px rgba(${color}, 0.4);
        animation: ac-step-in 0.2s ease-out;
      `;
      badge.textContent = `${step}/${total}`;

      document.body.appendChild(ripple);
      document.body.appendChild(highlight);
      document.body.appendChild(badge);

      // Fade out
      setTimeout(() => {
        highlight.style.animation = 'ac-highlight-out 0.3s ease-in forwards';
        badge.style.animation = 'ac-step-out 0.3s ease-in forwards';
      }, 500);

      setTimeout(() => {
        highlight.remove();
        ripple.remove();
        badge.remove();
      }, 800);
    },

    showPreflightResults(results) {
      const failed = results.filter(r => !r.passed);
      const passed = results.filter(r => r.passed);

      if (failed.length > 0) {
        this.flash('error', `Préflight: ${failed.map(f => f.condition.name).join(', ')} — échec`);
      } else {
        this.flash('success', `Préflight: ${passed.length} vérifications réussies`);
      }
    }
  };

  // =============================================================================
  // INITIALIZATION
  // =============================================================================

  // P0: Duplicate-instance guard — safe to paste snippet multiple times
  const existingInstance = document.getElementById('autoclicus-container');
  if (existingInstance) {
    existingInstance.remove();
    console.log('%c♻️ AutoClicUS: Instance précédente supprimée', 'color: #ffc107;');
  }

  try {
    // Load saved data
    try {
      const savedActions = Storage.getItem(Config.storage.actions);
      const savedConditions = Storage.getItem(Config.storage.conditions);
      const savedConfig = Storage.getItem(Config.storage.config);

      if (savedActions) State.recordedActions = JSON.parse(savedActions);
      if (savedConditions) State.conditions = JSON.parse(savedConditions);
      if (savedConfig) {
        const cfg = JSON.parse(savedConfig);
        State.speed = cfg.speed || 1;
        State.loopCount = cfg.loopCount || 1;
        State.timeLimit = cfg.timeLimit || null;
        if (cfg.settings) Object.assign(State.settings, cfg.settings);
      }
    } catch (e) {
      console.warn('Failed to load saved data:', e);
    }

    // Load scenario config + vibe preferences
    Scenario.loadConfig();
    UI.loadVibePrefs();
    State.currentTab = 'scenario'; // Default to scenario tab

    // Restore saved directory handle (async, non-blocking)
    FileManager.restoreDirectory().then(result => {
      if (result === true || result === 'needs_permission') {
        // Re-render to show file list (or permission button)
        if (State.currentTab === 'save') UI.render();
      }
    });

    // Initialize UI
    UI.init();

    // Update clock + countdown every second
    setInterval(() => {
      const clock = State.shadowRoot?.querySelector('.header-clock');
      if (clock) {
        const now = new Date();
        const time = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0') + ':' + String(now.getSeconds()).padStart(2,'0');
        clock.textContent = time;
      }
      // Update countdown in header
      if (State.countdownEnd) {
        const cd = State.shadowRoot?.querySelector('.header-countdown');
        if (cd) {
          const remaining = State.countdownEnd - Date.now();
          if (remaining > 0) {
            const hrs = Math.floor(remaining / 3600000);
            const mins = Math.floor((remaining % 3600000) / 60000);
            const secs = Math.floor((remaining % 60000) / 1000);
            const display = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            cd.textContent = `⏱ ${display}`;
            cd.classList.remove('expired');
          } else {
            cd.textContent = '⏱ 00:00:00 TERMINÉ';
            cd.classList.add('expired');
          }
        }
      }
    }, 1000);

    console.log(`%c✨ AutoClicUS v${Config.version} - Propulsé par JSLAI`, 'color: #00874e; font-size: 14px; font-weight: bold;');
    console.log(`%c${State.settings.shortcuts.record}=Enregistrer | ${State.settings.shortcuts.play}=Lire | ${State.settings.shortcuts.stop}=Stop | ${State.settings.shortcuts.pause}=Pause`, 'color: #6c757d; font-size: 12px;');
    if (Storage.isMemoryMode) {
      console.log('%c⚠️ localStorage indisponible — stockage en mémoire uniquement', 'color: #ffc107; font-size: 12px;');
    }

  } catch (e) {
    console.error('AutoClicUS initialization error:', e);
    alert('Erreur d\'initialisation AutoClicUS. Consultez la console pour plus de détails.');
  }

})();
